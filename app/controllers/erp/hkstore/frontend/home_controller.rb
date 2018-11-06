module Erp
  module Hkstore
    module Frontend
      class HomeController < Erp::Frontend::FrontendController
        def index
          @body_class = "common-home ltr layout-2"
        end
      end
    end
  end
end