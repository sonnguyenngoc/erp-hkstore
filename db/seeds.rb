puts "Create default admin user"
Erp::User.create(
  email: "admin@hoangkhang.com.vn",
  password: "aA456321@",
  name: "Super Admin",
  backend_access: true,
  confirmed_at: Time.now-1.day,
  active: true
) if Erp::User.where(email: "admin@hoangkhang.com.vn").empty?
