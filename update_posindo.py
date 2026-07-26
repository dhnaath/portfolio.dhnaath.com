with open("src/app/components/PosIndoExperience.tsx", "r") as f:
    content = f.read()

import re

target = re.search(r'<div className="flex justify-between items-start gap-4 mb-8">.*?</h3\s*>\s*</div>\s*</div>\s*</div>', content, re.DOTALL)

replacement = """        <div className="flex justify-between items-start gap-4 mb-8 group cursor-pointer" onClick={() => window.open('https://www.posindonesia.co.id/', '_blank', 'noopener,noreferrer')}>
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
          <div className="text-[#E64A19] bg-[#E64A19]/10 p-2 rounded-full group-hover:bg-[#E64A19]/20 transition-colors shrink-0">
            <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>"""

if target:
    with open("src/app/components/PosIndoExperience.tsx", "w") as f:
        f.write(content[:target.start()] + replacement + content[target.end():])
    print("Replaced!")
else:
    print("Regex match failed.")

