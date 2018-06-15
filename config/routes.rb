Erp::Hkstore::Engine.routes.draw do
  root to: "frontend/home#index"
  
  get "chuyen-muc-san-pham.html" => "frontend/category#index", as: :category
  
  get "ve-hoang-khang-incotech.html" => "frontend/information#about_us", as: :about_us
  get "lien-he-voi-hoang-khang-incotech.html" => "frontend/information#contact_us", as: :contact_us
  get "ho-so-nang-luc.html" => "frontend/information#capacity_profile", as: :capacity_profile
  get "cau-hoi-thuong-gap.html" => "frontend/information#faqs", as: :faqs
    
end