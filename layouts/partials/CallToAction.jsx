import Image from 'next/image';
import Link from 'next/link';

const CallToAction = ({ cta }) => {
  const { enable, title, button } = cta.frontmatter;

  return (
    enable && (
      <section className="relative overflow-hidden bg-dark-quaternary px-5 md:px-10 py-10 md:py-20">
        <div className=" relative z-20 flex flex-col items-center">
          <Image
            src="/images/supernovaicon.png"
            alt="supernova"
            width={50}
            height={48}
            className="mb-6"
          />
          <h2
            className="mb-10 inline-block bg-gradient-text bg-clip-text text-center text-h4 font-semibold text-transparent md:text-h2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {button.enable && (
            <Link
              className="btn btn-sm btn-light py-4 leading-none"
              href={button.link}
              target="_blank"
              rel="noopener nofollow noreferrer">
              {button.label}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 inline align-[-4px]">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8333 1.875C10.4882 1.875 10.2083 2.15482 10.2083 2.5C10.2083 2.84518 10.4882 3.125 10.8333 3.125C11.6267 3.125 12.4124 3.28127 13.1454 3.58489C13.8784 3.88852 14.5444 4.33354 15.1054 4.89456C15.6665 5.45558 16.1115 6.12161 16.4151 6.85462C16.7187 7.58763 16.875 8.37326 16.875 9.16667C16.875 9.51184 17.1548 9.79167 17.5 9.79167C17.8452 9.79167 18.125 9.51184 18.125 9.16667C18.125 8.20911 17.9364 7.26093 17.57 6.37627C17.2035 5.4916 16.6664 4.68777 15.9893 4.01068C15.3122 3.33359 14.5084 2.79649 13.6237 2.43005C12.7391 2.0636 11.7909 1.875 10.8333 1.875ZM17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333ZM10.2083 5.83333C10.2083 5.48816 10.4882 5.20833 10.8333 5.20833C11.3531 5.20833 11.8679 5.31072 12.3481 5.50964C12.8284 5.70857 13.2647 6.00014 13.6323 6.3677C13.9999 6.73527 14.2914 7.17163 14.4904 7.65188C14.6893 8.13213 14.7917 8.64685 14.7917 9.16667C14.7917 9.51185 14.5118 9.79167 14.1667 9.79167C13.8215 9.79167 13.5417 9.51185 13.5417 9.16667C13.5417 8.811 13.4716 8.45882 13.3355 8.13023C13.1994 7.80164 12.9999 7.50308 12.7484 7.25159C12.4969 7.00009 12.1984 6.8006 11.8698 6.66449C11.5412 6.52839 11.189 6.45833 10.8333 6.45833C10.4882 6.45833 10.2083 6.17851 10.2083 5.83333Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          )}
        </div>
        {/* chakra shapes */}
        <Image
          src="/images/chakra.svg"
          className="absolute bottom-0 left-0 z-10 w-[200px] -translate-x-[45%] translate-y-1/2  md:w-[350px] lg:w-[450px] xl:w-[640px]"
          alt="supernova"
          width={640}
          height={640}
        />
        <Image
          src="/images/chakra.svg"
          className="absolute right-0 top-0 z-10 w-[200px] -translate-y-[40%] translate-x-[45%] md:w-[350px] lg:w-[450px] xl:w-[640px]"
          alt="supernova"
          width={640}
          height={640}
        />
      </section>
    )
  );
};

export default CallToAction;
