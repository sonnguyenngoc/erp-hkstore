module Erp
  module Hkstore
    module Frontend
      class CategoryController < Erp::Frontend::FrontendController
        def listing
          @body_class = "template-list-collections"
        end
        
        def detail
          @body_class = "template-collection"
        end
        
        def product_detail
          @body_class = "template-product"
        end
      end
    end
  end
end