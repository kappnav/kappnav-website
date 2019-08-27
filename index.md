---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<div class="main_container">
    <header class="header"></header>
    <section class="logo_content">
        <div class="logo">
            <img src="graphics/kappnav-logo.svg" height="144px">
            <div class="logo_text">        
                <p id="kappnav-title">kAppNav</p>
                <p>Kubernetes Application Navigator</p>
            </div>
        </div>
        <div class="button" id="getting_started"><a href="https://github.com/kappnav/README">Get Started</a></div>
    </section>
    <section class="description">
        <p>
        {{ site.description }}
        </p>
        <p>
        The Kubernetes Application Navigator uses the <a href="https://github.com/kubernetes-sigs/application/blob/master/config/crds/app_v1beta1_application.yaml">Application Custom Resource Definition (CRD)</a> from the <a href="https://github.com/kubernetes-sigs/application">Kubernetes Application SIG</a> as the basis for describing applications.
        </p>
    </section>
    <footer class="footer"></footer>
</div>



