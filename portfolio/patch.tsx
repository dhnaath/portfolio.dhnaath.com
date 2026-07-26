                <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[calc(100%-17pt)] mx-auto px-4 md:px-8 gap-8">
                  {/* Left Section */}
                  <div className="flex justify-start items-center">
                    <div className="text-left text-2xl md:text-3xl text-[#222222] font-serif transition-opacity duration-300 m-0 leading-tight whitespace-normal md:whitespace-nowrap mt-[35pt]">
                      {transcriptPage === 3 ? "Universitas Logistik dan Bisnis Internasional (ULBI)" : transcriptLevels[transcriptPage].institution}
                    </div>
                  </div>
                  
                  {/* Right Section */}
                  <div className="flex justify-end items-center">
                    {transcriptLevels[transcriptPage].npsn && (
                      <div className="flex items-center gap-[15pt] md:gap-[30pt] mt-[10pt] md:mt-[35pt]">
                        <div className="text-right text-[#5B6572] font-serif transition-opacity duration-300 m-0 leading-tight text-[calc(1.125rem-1pt)] md:text-[calc(1.25rem-1pt)] whitespace-nowrap">
                          {transcriptLevels[transcriptPage].npsn}
                        </div>
                        <div className="text-right text-[#5B6572] font-serif transition-opacity duration-300 m-0 leading-tight text-[calc(1.125rem-1pt)] md:text-[calc(1.25rem-1pt)] whitespace-nowrap">
                          Akreditasi: {transcriptLevels[transcriptPage].akreditasi}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
