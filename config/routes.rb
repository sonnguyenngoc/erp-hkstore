Erp::Hkstore::Engine.routes.draw do
  root to: "frontend/home#index"
  get "404.html" => "frontend/error#404", as: :page_404
  get "gioi-thieu.html" => "frontend/information#about_us", as: :about_us
  
  get "tim-kiem-san-pham.html" => "frontend/product#search", as: :product_search
  get "chuyen-muc.html" => "frontend/product#listing", as: :product_listing
  get "san-pham.html" => "frontend/product#detail", as: :product_detail
  
  get "danh-sach-dich-vu.html" => "frontend/service#listing", as: :service_listing
  get "chi-tiet-dich-vu.html" => "frontend/service#detail", as: :service_detail
  
  scope "(:locale)", locale: /en|vi/ do
		namespace :backend, module: "backend", path: "backend/hkstore" do
      resources :products do
        collection do
          post 'list'
          get 'dataselect'
        end
      end
      resources :categories do
        collection do
          post 'list'
          get 'dataselect'
        end
      end
      resources :manufacturers do
        collection do
          post 'list'
          get 'dataselect'
        end
      end
      resources :menus do
        collection do
          post 'list'
          get 'dataselect'
        end
      end
    end
	end
end