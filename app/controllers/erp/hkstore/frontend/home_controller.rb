module Erp
  module Hkstore
    module Frontend
      class HomeController < Erp::Frontend::FrontendController
        def index
          @body_class = "template-index"
        end
      end
    end
  end
end