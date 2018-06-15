$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "erp/hkstore/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "erp_hkstore"
  s.version     = Erp::Hkstore::VERSION
  s.authors     = ["Luan Pham",
                  "Son Nguyen",
                  "Hung Nguyen"]
  s.email       = ["luanpm@hoangkhang.com.vn",
                  "sonnn@hoangkhang.com.vn",
                  "hungnt@hoangkhang.com.vn"]
  s.homepage    = "http://store.hoangkhang.com.vn/"
  s.summary     = "Công Ty TNHH Giải Pháp Công Nghệ Thông Tin Và Truyền Thông Hoàng Khang"
  s.description = "0306146736 - Công Ty TNHH Giải Pháp Công Nghệ Thông Tin Và Truyền Thông Hoàng Khang - 188 Đường Số 1, Phường 16, Quận Gò Vấp, TP. Hồ Chí Minh, Việt Nam"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 5.1.6"
  s.add_dependency "erp_core"
  s.add_dependency "deface"
end
