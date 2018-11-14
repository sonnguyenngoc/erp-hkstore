module Erp
  module Hkstore
    module Frontend
      class ServiceController < Erp::Frontend::FrontendController
        def listing
          @body_class = 'information-information ltr layout-2'
        end
        
        def detail
          @body_class = ''
        end
      end
    end
  end
end