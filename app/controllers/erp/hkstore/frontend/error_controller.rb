module Erp
  module Hkstore
    module Frontend
      class ErrorController < Erp::Frontend::FrontendController
        def index
          @body_class = 'information ltr layout-2 loaded'
        end
      end
    end
  end
end