const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf-8');

const card5 = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="PRAMUKA"
                      title="Pramuka Suhaid"
                      content="Piagam Penghargaan Pramuka Suhaid."
                      darkImage="https://github.com/dhnaath/Resources-Portofolio/blob/main/sertif%20pramuka%20suhaid.png?raw=true"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>`;

const card10 = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="PRAMUKA"
                      title="Bumi Perkemahan Siluk Muara Tawang"
                      content="Kegiatan Bumi Perkemahan Siluk Muara Tawang."
                      darkImage="https://github.com/dhnaath/Resources-Portofolio/blob/main/ChatGPT%20Image%2023%20Jul%202026,%2011.29.33.png?raw=true"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>`;

code = code.replace(card5, card10);
// Now we have two card10s. Remove the second one (which was the original card10).
const idx = code.lastIndexOf(card10);
if (idx !== -1) {
    code = code.substring(0, idx) + code.substring(idx + card10.length);
}

fs.writeFileSync('src/app/App.tsx', code);
console.log('done');
