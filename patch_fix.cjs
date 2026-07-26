const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf-8');

const target = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="KOMPETISI DEBAT"`;

const newCard = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="PRAMUKA"
                      title="Pramuka Suhaid"
                      content="Piagam Penghargaan Pramuka Suhaid."
                      darkImage="https://github.com/dhnaath/Resources-Portofolio/blob/main/ChatGPT%20Image%2023%20Jul%202026,%2011.29.33.png?raw=true"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
`;

if (code.includes(target)) {
    code = code.replace(target, newCard + target);
    fs.writeFileSync('src/app/App.tsx', code);
    console.log("Success");
} else {
    console.log("Target not found");
}
