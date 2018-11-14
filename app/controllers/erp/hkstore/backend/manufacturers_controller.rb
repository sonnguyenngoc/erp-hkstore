module Erp
  module Hkstore
    module Backend
      class ManufacturersController < Erp::Backend::BackendController        
        # GET /products
        def index
        end
        
        # POST /products/list
        def list
          @manufacturers = Manufacturer.get_data.paginate(:page => params[:page], :per_page => 20)

          render layout: nil
        end
      end
    end
  end
end