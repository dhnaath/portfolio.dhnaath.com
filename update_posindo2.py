with open("src/app/components/PosIndoExperience.tsx", "r") as f:
    content = f.read()

import re

target = re.search(r'<div className="flex justify-between items-start gap-4 mb-8 group cursor-pointer".*?</div>\s*</div>', content, re.DOTALL)

replacement = """        <div className="flex justify-between items-start gap-4 mb-8">
          <div className="flex items-center gap-4">
            {companyLogo && (
              <img src={companyLogo} alt={`${company} logo`} className="w-24 h-24 object-contain shrink-0" />
              )}      
            <div>
              <h3 className="text-xl mb-2 text-[#222222] font-serif whitespace-pre-line">
                {company}
              </h3>
            </div>
          </div>
          <a
            href="https://www.posindonesia.co.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors ml-auto text-[#5B6572] hover:text-[#222222]"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </a>
        </div>"""

if target:
    with open("src/app/components/PosIndoExperience.tsx", "w") as f:
        f.write(content[:target.start()] + replacement + content[target.end():])
    print("Replaced!")
else:
    print("Regex match failed.")
