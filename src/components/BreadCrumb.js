import Link from "next/link";

const Breadcrumb = ({ items }) => {
  return (
    <div className="mt-3 mb-3 breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                {items?.map((item, index) => {
                  const isActive = index === items?.length - 1;
                  if (isActive) {
                    return (
                      <li
                        key={index}
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {item?.label}
                      </li>
                    );
                  } else if (item?.href) {
                    return (
                      <li key={index} className="breadcrumb-item">
                        <Link href={item?.href}>{item?.label}</Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={index} className="breadcrumb-item">
                        {item?.label}
                      </li>
                    );
                  }
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
