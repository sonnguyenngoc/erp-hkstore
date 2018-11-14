module Erp
  module Hkstore
    module Backend
      class CategoriesController < Erp::Backend::BackendController        
        # GET /products
        def index
        end      
        
        # POST /products/list
        def list
          @categories = Category.get_data.paginate(:page => params[:page], :per_page => 20)

          render layout: nil
        end
      end
    end
  end
end