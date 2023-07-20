import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Button from '../components/button'
import Scrolldown from '../components/scroll-down'
import Cta from '../components/cta'
import Link from 'next/link'
import Image from 'next/image'
import Offshore from '../public/assets/off-shore-development.jpg'
import Recruitment from '../public/assets/recruitment-services.jpg'
import Staffing from '../public/assets/staffing-services.jpg'
import Sample_img from '../public/assets/sample_img.png'
import Blog_pic from '../public/assets/blog_1.jpg'


export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Global Japan Network Limited - Index`}</title>
      </Head>
      <Container>
        <Header />

        <section className='flex w-full h-screen items-center relative'>
          <div className='container'>
            <div className='flex items-center justify-start pt-24'>
              <div className=''>
                <h1 className='text-5xl leading-loose font-semibold	my-5'>創り出そう！<br />
                人の繋がりとテクノロジーで、<br />
                もっとエキサイティングな世界を</h1>
                <p className='text-2xl py-5 w-4/6'>To create a more exciting world with the power of people and technology.</p>
                <Button text="View Services" />
              </div>
            </div>
          </div>
          <div className=''>
            <Link href=''>
            </Link>
          </div>
          <div className='absolute bottom-0 right-0 pr-10 pb-10'>
            <Link className="hover:fill-grey" href=''>
              <svg className='' width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.536 69.415C16.421 69.415 0.868988 53.864 0.868988 34.748C0.868988 15.632 16.42 0.0809937 35.536 0.0809937C54.652 0.0809937 70.203 15.632 70.203 34.748C70.203 53.864 54.651 69.415 35.536 69.415ZM35.536 2.08199C17.524 2.08199 2.86899 16.736 2.86899 34.749C2.86899 52.762 17.523 67.416 35.536 67.416C53.549 67.416 68.203 52.76 68.203 34.748C68.203 16.736 53.548 2.08199 35.536 2.08199Z" fill="black"/>
                <path d="M35.424 47.776C35.1588 47.776 34.9044 47.6706 34.7169 47.4831C34.5293 47.2956 34.424 47.0412 34.424 46.776V22.216C34.424 21.9508 34.5293 21.6964 34.7169 21.5089C34.9044 21.3214 35.1588 21.216 35.424 21.216C35.6892 21.216 35.9436 21.3214 36.1311 21.5089C36.3186 21.6964 36.424 21.9508 36.424 22.216V46.776C36.424 47.0412 36.3186 47.2956 36.1311 47.4831C35.9436 47.6706 35.6892 47.776 35.424 47.776Z" fill="black"/>
                <path d="M35.382 48.281H35.359C35.2001 48.2775 35.0443 48.2361 34.9047 48.1603C34.765 48.0844 34.6455 47.9764 34.556 47.845L29.794 40.868C29.7199 40.7595 29.668 40.6375 29.641 40.509C29.6141 40.3804 29.6128 40.2478 29.6371 40.1187C29.6614 39.9897 29.711 39.8666 29.7828 39.7567C29.8547 39.6468 29.9475 39.5521 30.056 39.478C30.1645 39.4039 30.2865 39.3519 30.415 39.325C30.5436 39.2981 30.6762 39.2968 30.8053 39.3211C30.9343 39.3454 31.0573 39.395 31.1673 39.4668C31.2772 39.5387 31.3719 39.6315 31.446 39.74L35.423 45.566L39.402 40.284C39.5641 40.0794 39.7997 39.9463 40.0586 39.9131C40.3174 39.8799 40.579 39.9492 40.7875 40.1062C40.996 40.2633 41.1348 40.4956 41.1743 40.7536C41.2138 41.0115 41.1509 41.2748 40.999 41.487L36.181 47.883C35.991 48.134 35.695 48.281 35.382 48.281Z" fill="black"/>
              </svg>
            </Link>
          </div>
        </section>

        <section className='py-36'>
          <div className='container'>
            <div className=''>
              <h2 className='text-6xl font-medium text-primary'>About Us</h2>
              <h5 className='font-semibold text-accent pb-10'>弊社について</h5>
              <h6 className='pb-6 text-xl font-medium w-3/5'>Our professional team with global experience and digital skills support to accelerate your business growth</h6>
              <h6 className='w-3/5 text-2xl text-accent font-semibold pb-6'>グローバルビジネスと、テクノロジーに通じた専門家が、貴社のビジネスの成長をサポート致します。</h6>
              <div className='w-4/5'>
                <p className='pb-6 text-xl font-medium leading-relaxed'>企業環境が大きく変化するなかで、日本企業の成功の鍵を握るのは、デジタル人材を活用したグローバル化であると考えています。</p>
                <p className='pb-6 text-xl font-medium leading-relaxed'>私達は、インド人ＩＴエンジニアとチームを組み、テクノロジーを活かした競争力の強い企業への進化を支援いたします。そんな熱い想いを一緒に共有してくれる意欲ある仲間たちを求めています。</p>
                <p className='pb-6 text-xl font-medium leading-relaxed'>弊社のスタッフは、日印ビジネスの経験も豊富なＩＴエンジニアや専門家です。日本人ばかりでなく、インド人の専門家も日本に常駐して、日印のチームが一体となってきめ細かいグローバルでのご対応をさせていただきます。</p>
              </div>
            </div>
          </div>
        </section>

        <section className='pb-36'>
          <div className=''>
            <h2 className='text-6xl font-medium text-primary'>Product</h2>
            <h5 className='font-semibold text-accent pb-10'>弊社について</h5>
          </div>
          <div className='flex items-center justify-between gap-20 relative'>
            <div className='w-1/2 before:content-[""] before:w-2/6 before:bg-light_orange before:z-minus before:rounded-3xl before:w-2/4 before:h-full before:block before:absolute before:left-0 before:top-0'>
              <Image className='rounded-3xl ml-auto py-16 w-3/4' src={Sample_img} alt='global-subsidiary-management-system' />
            </div>
            <div className='w-1/2'>
              <h5 className='py-4 font-medium text-xl text-primary'>Global Subsidiary Management Tool</h5>
              <h4 className='pb-4 font-semibold text-accent text-xl'>グローバル経営管理ツール</h4>
              <p className='font-medium leading-8 pb-5'>海外子会社の正確な経営状況をタイムリーに把握して、グループとしての迅速な経営意思決定をする体制を構築したい。そんなご要望にお応えいたします。海外ビジネスの専門家（弁護士・公認会計士）によるアドバイスと、優秀なインド人ＩＴエンジニアチームによる技術サポートで、グローバル経営を強力にサポートいたします。</p>
              <Button text="Read More" />
            </div>
          </div>
        </section>

        <section className='pb-36'>
          <div className='container'>
            <div className='pb-16'>
              <h2 className='text-6xl font-medium text-primary'>Services</h2>
              <h5 className='font-semibold text-accent pb-10'>弊社について</h5>
              <p className='text-xl font-medium leading-relaxed w-4/6'> 優秀なインド人ＩＴ人材を活用して、日本企業の競争力を高めて欲しい。我々は、ＩＴ領域においてインドと日本を繋ぐ架け橋になり、インドへのオフショア開発、インド人ＩＴ人材の紹介、派遣、そして、それらの人材への教育という取組みをしています。</p>
            </div>
            <div className='flex justify-between gap-10 h-full'>
              <div className='w-2/6 h-full'>
                <Image className='w-full h-2/4 object-cover' src={Offshore} alt="off-shore-development" />
                <div className='p-10 bg-white'>
                  <h4 className='relative font-medium text-xl text-accent pb-12 z-10 pl-8 pt-1 before:content-["01"] before:absolute before:top-0 before:left-0 before:text-gray-200 before:font-semibold before:text-8xl before:z-minus'>Off-Shore Development</h4>
                  <p className='font-medium leading-7 pb-10'>日本からインドへのオフショア開発をサポート致します。 コスト削減と高品質のサービスを実現し、日本での開発コストの３~５割削減が可能となります。 優秀なインド人ＩＴエンジニアを貴社のチームの直下に配置いたします。</p>
                  <Link href="" className='inline-flex items-baseline gap-5 text-accent hover:text-black'>
                    Read More
                    <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.3077 6.61155H0.692319C0.351935 6.61155 0.0769348 6.33655 0.0769348 5.99617C0.0769348 5.65578 0.351935 5.38078 0.692319 5.38078H27.8212L24.0866 1.64617C23.8462 1.40578 23.8462 1.0154 24.0866 0.775015C24.3269 0.53463 24.7173 0.53463 24.9577 0.775015L29.7442 5.56155C29.9212 5.73848 29.9731 6.00194 29.8769 6.23271C29.7808 6.46155 29.5558 6.61155 29.3077 6.61155Z" fill="#FF6000"/>
                      <path d="M24.5154 11.4039C24.3577 11.4039 24.2 11.3443 24.0808 11.2231C23.8404 10.9828 23.8404 10.5924 24.0808 10.352L28.8731 5.55968C29.1135 5.3193 29.5038 5.3193 29.7442 5.55968C29.9846 5.80007 29.9846 6.19045 29.7442 6.43084L24.9519 11.2231C24.8308 11.3443 24.6731 11.4039 24.5154 11.4039Z" fill="#FF6000"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className='w-2/6 h-full'> 
                <Image className='w-full h-2/4 object-cover' src={Recruitment} alt="recruitment-services" />
                <div className='p-10 bg-white'>
                  <h4 className='relative font-medium text-xl text-accent pb-12 z-10 pl-8 pt-1 before:content-["02"] before:absolute before:top-0 before:left-0 before:text-gray-200 before:font-semibold before:text-8xl before:z-minus'>Recruitment Services</h4>
                  <p className='font-medium leading-7 pb-10'>貴社の従業員として、ご希望に合ったインド人ＩＴ人材をご紹介いたします。 採用時の就労ビザ取得、採用後の定着支援、税務などのバックオフィス業務も迅速・ タイムリーにワンストップでご提供します。</p>
                  <Link href="" className='inline-flex items-baseline gap-5 text-accent hover:text-black hover:fill-black'>
                    Read More
                    <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.3077 6.61155H0.692319C0.351935 6.61155 0.0769348 6.33655 0.0769348 5.99617C0.0769348 5.65578 0.351935 5.38078 0.692319 5.38078H27.8212L24.0866 1.64617C23.8462 1.40578 23.8462 1.0154 24.0866 0.775015C24.3269 0.53463 24.7173 0.53463 24.9577 0.775015L29.7442 5.56155C29.9212 5.73848 29.9731 6.00194 29.8769 6.23271C29.7808 6.46155 29.5558 6.61155 29.3077 6.61155Z" fill="#FF6000"/>
                      <path d="M24.5154 11.4039C24.3577 11.4039 24.2 11.3443 24.0808 11.2231C23.8404 10.9828 23.8404 10.5924 24.0808 10.352L28.8731 5.55968C29.1135 5.3193 29.5038 5.3193 29.7442 5.55968C29.9846 5.80007 29.9846 6.19045 29.7442 6.43084L24.9519 11.2231C24.8308 11.3443 24.6731 11.4039 24.5154 11.4039Z" fill="#FF6000"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className='w-2/6 h-full'>
                <Image className='w-full h-2/4 object-cover' src={Staffing} alt="Staffing-services" />
                <div className='p-10 bg-white'>
                  <h4 className='relative font-medium text-xl text-accent pb-12 z-10 pl-8 pt-1 before:content-["03"] before:absolute before:top-0 before:left-0 before:text-gray-200 before:font-semibold before:text-8xl before:z-minus'>Staffing Services</h4>
                  <p className='font-medium leading-7 pb-10'>日本語の話せる優秀なインドＩＴ人材にを、 貴社のチームの一員として派遣致します。 弊社の豊富な登録者の中から、 貴社のニーズに最も適した人材を選定し、必要なタイミングで、必要な人数だけ現場へ派遣致します。</p>
                  <Link href="" className='inline-flex items-baseline gap-5 text-accent hover:text-black'>
                    Read More
                    <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.3077 6.61155H0.692319C0.351935 6.61155 0.0769348 6.33655 0.0769348 5.99617C0.0769348 5.65578 0.351935 5.38078 0.692319 5.38078H27.8212L24.0866 1.64617C23.8462 1.40578 23.8462 1.0154 24.0866 0.775015C24.3269 0.53463 24.7173 0.53463 24.9577 0.775015L29.7442 5.56155C29.9212 5.73848 29.9731 6.00194 29.8769 6.23271C29.7808 6.46155 29.5558 6.61155 29.3077 6.61155Z" fill="#FF6000"/>
                      <path d="M24.5154 11.4039C24.3577 11.4039 24.2 11.3443 24.0808 11.2231C23.8404 10.9828 23.8404 10.5924 24.0808 10.352L28.8731 5.55968C29.1135 5.3193 29.5038 5.3193 29.7442 5.55968C29.9846 5.80007 29.9846 6.19045 29.7442 6.43084L24.9519 11.2231C24.8308 11.3443 24.6731 11.4039 24.5154 11.4039Z" fill="#FF6000"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pb-36'>
          <div className='pb-20'>
            <h2 className='text-6xl font-medium text-primary'>Blog</h2>
            <h5 className='font-semibold text-accent pb-10'>ブログ</h5>
            <p className='text-xl font-medium leading-relaxed w-4/6'> インドの最新のトピックスについて、定期的にアップデートをさせていただきます。インドの政治経済状況、インド進出企業の情報、インド人ITエンジニアに関する情報、各種セミナー情報などを配信いたします。</p>
          </div>
          <div className=''>
            <div className='flex items-center gap-10'>
              <div className=''>
                <Image src={Blog_pic} alt='interview' />
                <div className='p-5'>
                  <h6>Interview</h6>
                  <h4>インド人ITエンジニアインタビュー：Wさん</h4>
                  <p>今日、外国人材の活用はどの業種でも広がり、在日外国人数は増加傾向にあります。しかし、外国人材を採用した企業の中から、「外国人はすぐ転職してしまう」、と言う悩みの声が聞こえてくることも。</p>
                </div>
              </div>
              <div className=''>
                <Image src={Blog_pic} alt='interview' />
                <div className='p-5'>
                  <h6>Interview</h6>
                  <h4>インド人ITエンジニアインタビュー：Wさん</h4>
                  <p>今日、外国人材の活用はどの業種でも広がり、在日外国人数は増加傾向にあります。しかし、外国人材を採用した企業の中から、「外国人はすぐ転職してしまう」、と言う悩みの声が聞こえてくることも。</p>
                </div>
              </div>
              <div className=''>
                <Image src={Blog_pic} alt='interview' />
                <div className='p-5'>
                  <h6>Interview</h6>
                  <h4>インド人ITエンジニアインタビュー：Wさん</h4>
                  <p>今日、外国人材の活用はどの業種でも広がり、在日外国人数は増加傾向にあります。しかし、外国人材を採用した企業の中から、「外国人はすぐ転職してしまう」、と言う悩みの声が聞こえてくることも。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cta />
  
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
