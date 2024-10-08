import Base from '@layouts/Baseof';
import { getListPage, getSinglePage } from '@lib/contentParser';
import parseMDX from '@lib/utils/mdxParser';
import CallToAction from '@partials/CallToAction';
import Gallery from '@partials/Gallery';
import shortcodes from '@shortcodes/all';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

export default function CaseStudySingle({
  caseStudy,
  mdxContent,
  cta,
  gallery,
}) {
  const { title, description } = caseStudy.frontmatter;

  const { clients, industry, company, location } =
    caseStudy.frontmatter.information;

  return (
    <Base title={title} description={description}>
      <section className="section-lg pt-10 md:pt-20">
        <div className="container">
          <div className="row">
            {caseStudy.frontmatter.information.title && (
              <div className="mx-auto pb-10 lg:col-10">
                <h1
                  className="text-center text-h3 font-medium md:text-h2"
                  dangerouslySetInnerHTML={{
                    __html: caseStudy.frontmatter.information.title,
                  }}
                />
              </div>
            )}
            <div className="col-12">
              <div className="row gy-4">
                <div className="md:col-8 lg:col-9">
                  <div className="relative size-full overflow-hidden rounded-lg md:rounded-2xl">
                    <Image
                      className="size-full object-cover object-left-bottom md:absolute md:inset-0"
                      width={850}
                      height={450}
                      src={caseStudy.frontmatter.information.image}
                      alt={caseStudy.frontmatter.information.title}
                    />
                  </div>
                </div>
                <div className="md:col-4 lg:col-3">
                  <div className="space-y-5 divide-y divide-white/10 rounded-xl bg-dark-quaternary p-7 md:p-10">
                    {clients && (
                      <div className="">
                        <p className="mb-2 text-base-sm opacity-80">Clients</p>
                        <p
                          className="text-h6"
                          dangerouslySetInnerHTML={{ __html: clients }}
                        />
                      </div>
                    )}
                    {industry && (
                      <div className="pt-4">
                        <p className="mb-2 text-base-sm opacity-80">Industry</p>
                        <p
                          className="text-h6"
                          dangerouslySetInnerHTML={{ __html: industry }}
                        />
                      </div>
                    )}
                    {location && (
                      <div className="pt-4">
                        <p className="mb-2 text-base-sm opacity-80">Location</p>
                        <p
                          className="text-h6"
                          dangerouslySetInnerHTML={{ __html: location }}
                        />
                      </div>
                    )}
                    {company && (
                      <div className="pt-4">
                        <p className="mb-2 text-base-sm opacity-80">Company</p>
                        <p
                          className="text-h6"
                          dangerouslySetInnerHTML={{ __html: company }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-dark-secondary  md:mt-20 md:p-10">
          <div className="container py-8">
            <div className="content">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </div>
        </div>
      </section>
      <Gallery gallery={gallery} />
      <CallToAction cta={cta} />
    </Base>
  );
}

export async function getStaticPaths() {
  const caseStudies = await getSinglePage('content/customer-story');

  const paths = caseStudies.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
  }));

  return {
    paths,
    fallback: false, // If fallback is false, any invalid slugs will show a 404 page
  };
}

export async function getStaticProps({ params }) {
  const caseStudies = await getSinglePage('content/customer-story');
  const caseStudy = caseStudies.find(
    (study) => study.slug.toLowerCase() === params.slug.toLowerCase()
  );
  const cta = await getListPage('content/sections/call-to-action.md');
  const gallery = await getListPage('content/sections/gallery.md');
  const mdxContent = await parseMDX(caseStudy.content);
  return {
    props: {
      caseStudy,
      mdxContent,
      cta,
      gallery,
    },
  };
}
