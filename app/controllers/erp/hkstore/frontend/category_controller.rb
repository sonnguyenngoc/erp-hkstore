module Erp
  module Hkstore
    module Frontend
      class CategoryController < Erp::Frontend::FrontendController
        def index
          @body_class = "template-collection"
        end
      end
    end
  end
end