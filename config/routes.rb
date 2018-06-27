Erp::Hkstore::Engine.routes.draw do
  root to: "frontend/home#index"
  
  get "chuyen-muc/may-vi-tinh.html" => "frontend/category#listing", as: :category_listing
  get "chuyen-muc-san-pham/may-vi-tinh/laptop-asus.html" => "frontend/category#detail", as: :category_detail
  get "san-pham/laptop-asus/chi-tiet-san-pham.html" => "frontend/category#product_detail", as: :product_detail
  
  get "ve-hoang-khang-incotech.html" => "frontend/information#about_us", as: :about_us
  get "lien-he-voi-hoang-khang-incotech.html" => "frontend/information#contact_us", as: :contact_us
  get "ho-so-nang-luc.html" => "frontend/information#capacity_profile", as: :capacity_profile
  get "cau-hoi-thuong-gap.html" => "frontend/information#faqs", as: :faqs
    
end