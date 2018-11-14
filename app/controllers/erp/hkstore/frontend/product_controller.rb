module Erp
  module Hkstore
    module Frontend
      class ProductController < Erp::Frontend::FrontendController
        def search
          @body_class = 'sosearchpro-wrapper so-search'
        end
        
        def listing
          @body_class = 'product-category ltr layout-2'
        end
        
        def detail
          @body_class = 'product-product ltr layout-2'
        end
      end
    end
  end
end