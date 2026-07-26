const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf-8');

const target = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="OLIMPIADE SAINS NASIONAL"
                      title="OSN SD/MI 2013"
                      content="Peserta Olimpiade Sains Nasional SD/MI Tahun 2013."
                      darkImage="https://github.com/dhnaath/Resources-Portofolio/blob/main/osn%20baru.png?raw=true"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>`;

const replace = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="PRAMUKA"
                      title="Pramuka Suhaid"
                      content="Piagam Penghargaan Pramuka Suhaid."
                      darkImage="https://github.com/dhnaath/Resources-Portofolio/blob/main/sertif%20pramuka%20suhaid.png?raw=true"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>`;

code = code.replace(target, replace);
fs.writeFileSync('src/app/App.tsx', code);
console.log('done');
