module Erp
  module Hkstore
    module Backend
      class MenusController < Erp::Backend::BackendController        
        # GET /products
        def index
        end      
        
        # POST /products/list
        def list
          @menus = Menu.get_data.paginate(:page => params[:page], :per_page => 20)

          render layout: nil
        end
      end
    end
  end
end