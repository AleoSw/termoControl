const express = require("express");
const path = require("path");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const v1AuthRoutes = require("./routes/v1/authRoutes.js");
const v1DashboardRoutes = require("./routes/v1/dashboard.js");
const v1SettingsRoutes = require("./routes/v1/settings.js");
const v1ProductionRoutes = require("./routes/v1/production.js");
const v1InventaryRoutes = require("./routes/v1/inventary.js");
const v1MaterialRoutes = require("./routes/v1/material.js");
const v1ReportsRoutes = require("./routes/v1/reports.js");
const v1ProfileRoutes = require("./routes/v1/profileRoutes.js");

const app = express();

const PORT = process.env.PORT || 4000;

//hbs config
const hbs = exphbs.create({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
});

app.engine(".hbs", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("home");
});

app.use("/auth", v1AuthRoutes);
app.use("/dashboard", v1DashboardRoutes);
app.use("/settings", v1SettingsRoutes);
app.use("/production", v1ProductionRoutes);
app.use("/inventary", v1InventaryRoutes);
app.use("/material", v1MaterialRoutes);
app.use("/reports", v1ReportsRoutes);
app.use("/profile", v1ProfileRoutes);
app.use(express.static("public"));

app.listen(PORT);
