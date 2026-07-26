const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');

// Replace the first mt-[10pt] inside Menu Section (the documentation slider)
code = code.replace(
  '<div className="flex items-center justify-center gap-4 w-full h-full mt-[10pt]">',
  '<div className="flex items-center justify-center gap-4 w-full h-full mt-[30pt]">'
);

// Replace the second mt-[10pt] inside Personal Designs Section (the design slider)
// Actually we can just do it globally for this specific string if there are only 2
code = code.replace(
  '<div className="flex items-center justify-center gap-4 w-full h-full mt-[10pt]">',
  '<div className="flex items-center justify-center gap-4 w-full h-full mt-[30pt]">'
);

// Replace the mt-[110pt] in Academic Logbook Section
code = code.replace(
  '<div className="flex flex-col items-center justify-center gap-1 mt-[110pt] mb-[10pt] opacity-40">',
  '<div className="flex flex-col items-center justify-center gap-1 mt-[30pt] mb-[10pt] opacity-40">'
);

fs.writeFileSync('src/app/App.tsx', code);
