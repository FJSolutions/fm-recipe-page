import fs from "fs-extra";
import path from "node:path";
import {ensureDir} from "fs-extra/esm";

const run = async () => {
    // Configure run
    const outputDir = "docs"

    // Clean up the last build
    await fs.remove(outputDir)
    await fs.ensureDir(outputDir)

    // Copy the index file
    await fs.copy("index.html", path.join(outputDir, "index.html"));

    // Copy the stylesheet
    await ensureDir(path.join(outputDir, "styles" ));
    await fs.copy("styles/main.css", path.join(outputDir, "styles/main.css"));

    // Copy the images
    await ensureDir(path.join(outputDir, "assets", "fonts" ));
    await fs.copy("assets/images/image-omelette.jpeg", path.join(outputDir, "assets/images/image-omelette.jpeg"));
    await fs.copy("assets/images/favicon-32x32.png", path.join(outputDir, "assets/images/favicon-32x32.png"));

    // Copy the fonts
    await ensureDir(path.join(outputDir, "assets", "images" ));
    await fs.copy("assets/fonts/outfit/Outfit-VariableFont_wght.ttf", path.join(outputDir, "assets/fonts/outfit/Outfit-VariableFont_wght.ttf"));
    await fs.copy("assets/fonts/young-serif/YoungSerif-Regular.ttf", path.join(outputDir, "assets/fonts/young-serif/YoungSerif-Regular.ttf"));

    console.log(`Output to '${outputDir}' `);
}

export default run()
