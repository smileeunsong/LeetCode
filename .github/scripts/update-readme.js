const fs = require("fs");
const path = require("path");

function getDirectories(source) {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
    .map((dirent) => dirent.name);
}

const rootDir = process.cwd();
const directories = getDirectories(rootDir);
console.log("directories:", directories);

const excludeDirs = new Set([".github", "node_modules", "scripts"]);

const difficulties = {};

directories.forEach((dir) => {
  if (excludeDirs.has(dir)) return;

  const readmePath = path.join(rootDir, dir, "README.md");
  if (!fs.existsSync(readmePath)) return;

  const content = fs.readFileSync(readmePath, "utf-8");

  const match = content.match(/<h3>(.*?)<\/h3>/m);
  if (!match) return;

  const difficulty = match[1].trim();

  let problemNumber = "";
  let title = "";
  const h2Match = content.match(/<h2><a[^>]*>(.*?)<\/a><\/h2>/i);
  if (h2Match) {
    const h2Content = h2Match[1].trim();
    const numTitleMatch = h2Content.match(/^(\d+)\.\s*(.+)$/);
    if (numTitleMatch) {
      problemNumber = numTitleMatch[1];
      title = numTitleMatch[2].trim();
    } else {
      title = h2Content;
    }
  } else {
    title = dir;
  }

  const problem = {
    folderName: dir,
    folderLink: `./${dir}`,
    problemNumber,
    title,
  };

  if (!difficulties[difficulty]) {
    difficulties[difficulty] = [];
  }
  difficulties[difficulty].push(problem);
});

const difficultyOrder = ["Easy", "Medium", "Hard"];
const sortedDifficultyKeys = Object.keys(difficulties).sort((a, b) => {
  const idxA = difficultyOrder.indexOf(a);
  const idxB = difficultyOrder.indexOf(b);
  if (idxA !== -1 && idxB !== -1) return idxA - idxB;
  return a.localeCompare(b);
});

let newReadme = "# LeetCode Questions and Answers\n\n";
newReadme += "## Stats\n\n";
newReadme += "| Difficulty | Solved Count |\n| --- | --- |\n";
newReadme += sortedDifficultyKeys
  .map((difficulty) => `| ${difficulty} | ${difficulties[difficulty].length} |`)
  .join("\n");
newReadme += "\n\n";
newReadme += `### Total Solved: ${directories.length}\n\n`;
newReadme += "## Problems\n\n";

newReadme += sortedDifficultyKeys
  .map((difficulty) => {
    const problems = difficulties[difficulty];
    problems.sort((a, b) => {
      if (a.problemNumber && b.problemNumber) {
        return parseInt(a.problemNumber) - parseInt(b.problemNumber);
      }
      return a.folderName.localeCompare(b.folderName);
    });

    const tableHeader = `| Number | Title |\n| --- | --- |`;
    const tableRows = problems
      .map(
        (p) => `| ${p.problemNumber || "-"} | [${p.title}](${p.folderLink}) |`
      )
      .join("\n");

    return `### ${difficulty}\n\n` + `${tableHeader}\n${tableRows}\n\n`;
  })
  .join("");

fs.writeFileSync(path.join(rootDir, "README.md"), newReadme, "utf-8");
console.log("README.md가 업데이트되었습니다.");
