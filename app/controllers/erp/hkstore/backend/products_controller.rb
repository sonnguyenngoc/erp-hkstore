module Erp
  module Hkstore
    module Backend
      class ProductsController < Erp::Backend::BackendController        
        # GET /products
        def index
        end
        
        # POST /products/list
        def list
          @products = Product.search(params).paginate(:page => params[:page], :per_page => 20)

          render layout: nil
        end
        
        # DATASELECT
        def dataselect
          respond_to do |format|
            format.json {
              render json: Product.dataselect(params[:keyword].split('/').last.strip)
            }
          end
        end
      end
    end
  end
end