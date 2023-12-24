import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column my-4">
      <h2>سفارش با موفقیت ثبت شد</h2>
      <Link className="btn btn-light mt-2" to="/">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default Success;
