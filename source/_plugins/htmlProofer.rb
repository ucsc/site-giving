# require "html-proofer"
# #
# Jekyll::Hooks.register :site, :post_write do |site|
#   HTMLProofer.check_directory(site.config["destination"], opts = {
#     :check_html => true,
#     :check_img_http => true,
#     :disable_external => true,
#     :report_invalid_tags => false,
#     :allow_hash_href => true,
#     :file_ignore => [/.*\/reports\/.*/,]
#   }).run
# end
