const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const DATA_DIR = path.join(__dirname, "data");
const PUBLIC_DIR = path.join(__dirname, "public");
app.use(express.static(PUBLIC_DIR));
function parseHealthMarkdown(markdown){
  const sections = {};
  const lines = (markdown || "").split(/\n/);
  let current = null;
  lines.forEach((line)=>{
    const m = line.match(/^##\s*(.*)$/);
    if(m){ current = m[1].trim(); sections[current] = sections[current] || ""; }
    else if(current){ sections[current] += line + "\n"; }
  });
  return { sections };
}
app.get("/api/health/:range?", (req,res)=>{
  const range = req.params.range || "day";
  let files = [];
  try {
    files = fs.readdirSync(DATA_DIR)
      .filter(f=>/^health-\\d{4}-\\d{2}-\\d{2}\\â$/.test(f))
      .sort((a,b)=>a.localeCompare(b));
  } catch(e){}
  const MAX_DAYS = range === "month" ? 30 : range === "week" ? 7 : 1;
  const recent = files.slice(-MAX_DAYS);
  const data = [];
  for(const f of recent){
    const m = f.match(/health-(\\d{4}-\\d{2}-\\d{2})\\â/");
    const date = m ? m[1] : "";
    const p = path.join(DATA_DIR, f);
    const text = fs.existsSync(p) ? fs.readFileSync(p, utf8) : "";
    const parsed = parseHealthMarkdown(text);
    data.push({ date, content: parsed.sections });
  }
  res.json({ range, count: data.length, data });
});
app.get("/", (req,res)=> res.sendFile(path.join(PUBLIC_DIR, "index.html")));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Health dashboard API running at http://localhost:${PORT}`));
