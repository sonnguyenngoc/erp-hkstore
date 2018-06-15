module Erp
  module Hkstore
    module Frontend
      class InformationController < Erp::Frontend::FrontendController      
        def about_us
          @body_class = "template-page"
        end
        
        def contact_us
          @body_class = "template-page"
        end
        
        def capacity_profile
          @body_class = "template-page"
        end
        
        def faqs
          @body_class = "template-page"
        end
      end
    end
  end
end