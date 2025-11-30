// server/routes/registrations.js
const express = require('express');
const Registration = require('../models/Registration');
const authMiddleware = require('../middleware/auth');

const ExcelJS = require("exceljs");
const router = express.Router();

// POST /api/registrations
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, college, branch, year } = req.body;

    if (!name || !email || !phone || !college || !branch || !year) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const registration = await Registration.create({
      name,
      email,
      phone,
      college,
      branch,
      year,
    });

    res.status(201).json(registration);
  } catch (error) {
    console.error('Error creating registration:', error);
    res.status(500).json({ message: 'Server error while registering' });
  }
});

// GET /api/registrations (admin)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const regs = await Registration.find().sort({ createdAt: -1 });
    // return JSON using toJSON transform (keeps createdAt & created_at now)
    res.json(regs.map(r => r.toJSON()));
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ message: 'Failed to fetch registrations' });
  }
});

// DELETE /api/registrations/:id
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.json({ message: "Registration deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting registration" });
  }
});

// GET /api/registrations/export (admin)
router.get("/export", authMiddleware, async (req, res) => {
  try {
    const regs = await Registration.find().sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Hackfest Registrations");

    // Columns
    sheet.columns = [
      { header: "S.No", key: "sno", width: 8 },
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "College", key: "college", width: 30 },
      { header: "Branch", key: "branch", width: 20 },
      { header: "Year", key: "year", width: 10 },
      { header: "Submitted At", key: "submitted_at", width: 28 },
    ];

    regs.forEach((r, index) => {
      // r may be a Mongoose doc: use r.createdAt if present, otherwise try r.created_at
      const created = r.createdAt || r.created_at || r.toJSON && r.toJSON().createdAt;
      const submittedAt = created ? new Date(created).toLocaleString() : "";

      sheet.addRow({
        sno: index + 1,
        name: r.name,
        email: r.email,
        phone: r.phone,
        college: r.college,
        branch: r.branch,
        year: r.year,
        submitted_at: submittedAt,
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=hackfest_registrations.xlsx");

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Error exporting Excel:", error);
    res.status(500).json({ message: "Error exporting Excel" });
  }
});

module.exports = router;
