const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf-8');

const card5 = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="OLIMPIADE SAINS NASIONAL"
                      title="OSN SD/MI 2013"
                      content="Peserta Olimpiade Sains Nasional SD/MI Tahun 2013."
                      darkImage="https://github.com/dhnaath/Resources-Portofolio/blob/main/osn%20baru.png?raw=true"
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

if (code.includes(card5) && code.includes(card10)) {
  code = code.replace(card5, '__CARD5_PLACEHOLDER__');
  code = code.replace(card10, card5);
  code = code.replace('__CARD5_PLACEHOLDER__', card10);
  fs.writeFileSync('src/app/App.tsx', code);
  console.log('Swapped cards successfully.');
} else {
  console.log('Could not find cards to swap.');
}
