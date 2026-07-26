with open("src/app/App.tsx", "r") as f:
    content = f.read()

target = 'className="fixed top-6 right-6 md:top-8 md:right-10 z-[100] flex items-center justify-center w-10 h-10 font-sans text-sm font-semibold text-[#222222] bg-[#F4F3F0]/80 backdrop-blur-md rounded-full border border-[#5B6572]/20 shadow-sm scale-150 origin-top-right cursor-pointer hover:bg-[#EAE9E5] transition-colors"\n      >\n        <span className="mt-[2px]">{lang}</span>'
replacement = 'className="fixed top-6 right-6 md:top-8 md:right-10 z-[100] flex items-center justify-center w-10 h-10 font-sans text-sm font-semibold text-[#222222] bg-[#F4F3F0]/80 backdrop-blur-md rounded-full border border-[#5B6572]/20 shadow-sm scale-150 origin-top-right cursor-pointer hover:bg-[#EAE9E5] transition-colors"\n      >\n        <span className="leading-none pt-[1px]">{lang}</span>'

content = content.replace(target, replacement)

with open("src/app/App.tsx", "w") as f:
    f.write(content)
