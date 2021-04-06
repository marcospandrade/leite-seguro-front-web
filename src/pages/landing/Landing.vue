<template>
  <div class="site-wrapper">
    <Header />
    <!--Off Canvas Navigation Start-->
    <aside class="off-canvas-wrapper">
      <div class="btn-close-off-canvas">
        <i class="icon icon-simple-remove"></i>
      </div>
      <div class="off-canvas-inner">
        <!-- mobile menu start -->
        <div class="mobile-navigation">
          <!-- mobile menu navigation start -->
          <nav class="off-canvas-nav">
            <ul class="mobile-menu">
              <li class="menu-item-has-children">
                <a href="#">Demos <i class="icon icon-minimal-down"></i></a>
                <ul class="sub-menu">
                  <li class="single-item">
                    <a href="">
                      <h3>Mobile Application</h3>
                      <p>Best for Mobile App Presentation</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="">
                      <h3>Web Application</h3>
                      <p>Best for Mobile App Presentation</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="">
                      <h3>SaaS Application</h3>
                      <p>Best for Mobile App Presentation</p>
                    </a>
                  </li>
                  <li class="single-item">
                    <a href="">
                      <h3>SaaS Subsciption</h3>
                      <p>Best for Mobile App Presentation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li><a href="#">Pages</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <!-- mobile menu navigation end -->
        </div>
        <!-- mobile menu end -->

        <!-- Header buttons start -->
        <div class="header-btns offcanvas">
          <div class="header-btns">
            <a href="#" class="btn btn-primary--opacity hvr-bounce-to-right"
              >Sign in</a
            >
            <a href="#" class="btn btn--primary hvr-shine">Start free trial</a>
          </div>
        </div>
        <!-- Header buttons end -->
      </div>
    </aside>
    <!--Off Canvas Navigation End-->

    <!-- Banner Section -->
    <section
      class="hero-area"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">
            <div class="hero-content">
              <h1 class="title h2">
                Tenha todas as informações de maneira organizada com o Leite
                Seguro
              </h1>
              <p>
                Tome as melhores decisões para o seu rebanho leiteiro com o
                Leite Seguro
              </p>
              <div class="hero-btn">
                <router-link to="/login" class="btn btn-header">Entrar</router-link>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div
              class="dashboard-img"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <img src="@/assets/images/dashboard-analytics.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="hero-shape"><img src="image/hero-shape.png" alt=""></div> -->
    </section>

    <!-- Feature Section -->
    <div class="feature-section">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-sm-9 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <div class="widget01 feature--widget">
              <div class="widget__icon">
                <span class="inner-circle circle-bg-1"></span>
                <span class="outer-circle circle-bg-1"></span>
              </div>
              <div class="widget__body divider--right">
                <h3 class="widget__heading h6">Plataforma única</h3>
                <p>
                  Através de um único sistema, você poderá entender melhor sobre
                  a sua produção leiteira.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-sm-9 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <div class="widget01 feature--widget">
              <div class="widget__icon">
                <span class="inner-circle circle-bg-2"></span>
                <span class="outer-circle circle-bg-2"></span>
              </div>
              <div class="widget__body divider--right">
                <h3 class="widget__heading h6">Comunicação Ágil</h3>
                <p>
                  No Leite Seguro, você tem todas as informações através do site
                  e do nosso aplicativo na palma da sua mão, e em tempo real.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-sm-9 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
            data-aos-delay="1300"
          >
            <div class="widget01 feature--widget">
              <div class="widget__icon">
                <span class="inner-circle circle-bg-3"></span>
                <span class="outer-circle circle-bg-3"></span>
              </div>
              <div class="widget__body">
                <h3 class="widget__heading h6">Decisões Assertivas</h3>
                <p>
                  Com toda a nossa análise das informações registradas, você tem
                  tudo o que precisa para tomar as melhores decisões para o seu
                  rebanho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content Section -->
    <div class="content-section bg-light-white section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="content-img content-img-group-1">
              <div
                class="image-1 d-none d-md-block"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <img src="@/assets/images/content-1-1.png" alt="" />
              </div>
              <div
                class="image-2 image-overlay d-none d-md-block"
                data-aos="fade-right"
                dat
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <img src="@/assets/images/content-1-2.png" alt="" />
              </div>
              <div class="image-mobile d-md-none">
                <img src="@/assets/images/content-1-mobile.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-xl-5 offset-xl-1 col-lg-6 col-md-6">
            <div class="content-section-text">
              <h2 class="title">
                Atualize-se com a tecnologia Leite Seguro<br
                  class="d-none d-xs-block"
                />
              </h2>
              <p>
                Tome suas decisões com o máximo de informações possível
                utilizando a plataforma Leite Seguro,
              </p>
              <div
                class="button"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <a href="#" class="btn btn-cta-inverse mt--20">Crie sua conta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content Section 2 -->
    <div class="content-section section-padding section-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-6 col-md-6 order-md-2">
            <div class="content-img content-img-group-2">
              <div
                class="image-1 d-none d-md-block"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <img src="@/assets/images/content-2-1.png" alt="" />
              </div>
              <div
                class="image-2 d-none d-md-block"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <img src="@/assets/images/content-2-2.png" alt="" />
              </div>
              <div class="image-mobile d-md-none">
                <img src="@/assets/images/content-2-mobile.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 col-md-6 order-md-1">
            <div class="content-section-text">
              <h2 class="title">
                Centralize informações e<br class="d-none d-xs-block" />
                economize tempo!
              </h2>
              <p>
                Com o Leite Seguro, você tem mais informações para tomar suas decisões e economiza tempo
                através da nossa plataforma web e mobile que é totalmente interligada.
              </p>
              <a href="#" class="btn btn-cta"
                >Faça Login</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Video Section -->
    <div
      class="section-padding video-bg"
      style="background-image: url('images/cta-bg.png')"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div class="video-content">
              <a
                data-fancybox
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                class="video-btn"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
                ><i class="icon icon-triangle-right-17-2"></i
              ></a>
              <h2 class="title">Nós queremos resolver problemas</h2>
              <p>
                Através de uma plataforma intuitiva, você terá muito mais controle sobre a sua produção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div
      id="price-section"
      class="pricing-section section-padding-top mb--60 mb-md--80"
    >
      <div class="pricing-section-bg">
        <div class="pricing-shape">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 72"
            version="1.1"
          >
            <path
              d="M0 9.21563C0 9.21563 486.438 -2.64935 790.035 31.8207C1093.63 66.2908 1343.93 92.2333 1600 44.5336L1600 0L0 0L0 9.21563Z"
              transform="translate(0 0.5)"
              id="Path-4"
              fill="#D8D8D8"
              stroke="none"
              class="pricing-shape-color"
            />
          </svg>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-xl-8 mb--35">
            <div class="section-title">
              <h2 class="title h3">Escolha um plano</h2>
              <p>
                Atendemos nossos clientes através de planos de assinatura.
              </p>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <div data-tab-target="#pricing-tab-1" class="btn--toggle">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                <p>Mensal</p>
                <p>Anual</p>
              </label>
            </div>
          </div>
          <div class="col-12">
            <div class="custom-tab-wrapper monthly" id="pricing-tab-1">
              <div class="row mb-d-30 justify-content-center">
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div
                    class="card card-p01 card-active"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    data-aos-delay="300"
                  >
                    <div class="card-head">
                      <h6>Básico</h6>
                      <h2>
                        <span class="small-title">R$</span>
                        <span class="big-txt price-default">100,00</span>
                        <span
                          class="big-txt price-dynamic"
                          data-monthly="100"
                          data-yearly="170"
                        ></span>
                        <span class="devider">/</span>
                        <span class="month">mês</span>
                      </h2>
                      <p>
                        Bom para testar nossos benefícios e validar se resolve o teu problema. Descubra o poder da inovação tecnológica.
                      </p>
                    </div>

                    <div class="card-content">
                      <ul class="pricing-list">
                        <li>
                          <span><i class="icon icon-check-2"></i></span
                          >Benefício 1
                        </li>
                        <li>
                          <span><i class="icon icon-check-2"></i></span>
                          Benefício 2
                        </li>
                        <li class="disable-opt">
                          <span><i class="icon icon-check-2"></i></span>Benefício 3
                        </li>
                        <li class="disable-opt">
                          <span><i class="icon icon-check-2"></i></span
                          >Benefício 4
                        </li>
                      </ul>
                      <div class="card-btn text-center">
                        <a href="#" class="btn btn-cta"
                          >Crie sua conta</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div
                    class="card card-p01 card-active"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    data-aos-delay="800"
                  >
                    <div class="card-head">
                      <h6>Pro</h6>
                      <h2>
                        <span class="small-title">R$</span>
                        <span class="big-txt price-default">250,00</span>
                        <span
                          class="big-txt price-dynamic"
                          data-monthly="250"
                          data-yearly="300"
                        ></span>
                        <span class="devider">/</span>
                        <span class="month">mês</span>
                      </h2>
                      <p>
                        Ideal para quem já conhece o Leite Seguro e está disposto a desfrutar dos benefícios premium da plataforma. Escala garantida.
                      </p>
                    </div>

                    <div class="card-content">
                      <ul class="pricing-list">
                        <li>
                          <span><i class="icon icon-check-2"></i></span
                          >Benefício 1
                        </li>
                        <li>
                          <span><i class="icon icon-check-2"></i></span>
                          Benefício 2
                        </li>
                        <li>
                          <span><i class="icon icon-check-2"></i></span>
                          Benefício 3
                        </li>
                        <li>
                          <span><i class="icon icon-check-2"></i></span
                          >Benefício 4
                        </li>
                      </ul>
                      <div class="card-btn text-center">
                        <a href="#" class="btn btn-cta"
                          >Sou PRO</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial Section -->
    <div class="pb--60 pb-md--70 bg-light-white">
      <div class="container mt--50">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-xl-8 mb--35 mt--35">
            <div class="section-title">
              <h2 class="title h3">Feedbacks</h2>
            </div>
          </div>
        </div>
        <div class="card-group berlin-card-group">
          <div class="card testimonial-card-1">
            <div class="card-body">
              <span class="quote-icon">”</span>
              <p class="card-text mb--10">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save.”
              </p>
            </div>
            <div class="card-footer">
              <div class="client-card pb--10">
                <div class="image">
                  <img src="@/assets/images/testimonial1.png" alt="" />
                </div>
                <div class="content">
                  <h5 class="title">Cameron Anderson</h5>
                  <span>From CrazyEggs.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card testimonial-card-1">
            <div class="card-body">
              <span class="quote-icon">”</span>
              <p class="card-text mb--10">
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users.”
              </p>
            </div>
            <div class="card-footer">
              <div class="client-card pb--10">
                <div class="image">
                  <img src="@/assets/images/testimonial2.png" alt="" />
                </div>
                <div class="content">
                  <h5 class="title">Cameron Anderson</h5>
                  <span>From CrazyEggs.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card testimonial-card-1">
            <div class="card-body">
              <span class="quote-icon">”</span>
              <p class="card-text mb--10">
                “This is a top quality product. No need to think twice before
                purchasing, you simply could not go wrong”
              </p>
            </div>
            <div class="card-footer">
              <div class="client-card pb--10">
                <div class="image">
                  <img src="@/assets/images/testimonial3.png" alt="" />
                </div>
                <div class="content">
                  <h5 class="title">Cameron Anderson</h5>
                  <span>From CrazyEggs.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="pb--60 pb-md--100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="cta-wrapper">
              <h3
                class="title h3 mt--20"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Inove no gerenciamento do seu rebanho com o Leite Seguro
              </h3>
              <div
                class="button"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <a href="#" class="btn btn-cta mt--20">Crie sua conta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import imgLanding from "@/assets/images/hero-bg.png";

export default {
  name: "LandingPage",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.hero-area {
  background-image: imgLanding;
}
</style>