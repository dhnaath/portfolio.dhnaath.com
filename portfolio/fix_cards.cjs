const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf-8');

const staticImage = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px] shrink-0">
                    <div className="w-full h-[290px] rounded-[2rem] border-2 border-[#5B6572]/20 overflow-hidden shadow-sm bg-white relative">
                      <img 
                        src="https://github.com/dhnaath/Resources-Portofolio/blob/main/sertif%20pramuka%20suhaid.png?raw=true" 
                        alt="Sertifikat Pramuka" 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" draggable={false} onContextMenu={(e) => e.preventDefault()} 
                      />
                    </div>
                  </div>`;

const flipbookCard = `                  <div className="w-[80vw] sm:w-[361px] md:w-[406px]">
                    <FlipbookCard 
                      category="PRAMUKA"
                      title="Pramuka Suhaid"
                      content="Piagam Penghargaan Pramuka Suhaid."
                      darkImage="https://github.com/dhnaath/Resources-Portofolio/blob/main/sertif%20pramuka%20suhaid.png?raw=true"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>`;

if (code.includes(staticImage)) {
    code = code.replace(staticImage, flipbookCard);
    fs.writeFileSync('src/app/App.tsx', code);
    console.log("Success");
} else {
    console.log("Static image not found");
}
