---
layout: default
---
<div class="main_container" role="main">
    {%- include header.html -%}
    <section class="logo_content">
        <div class="logo">
            <img class="logo_svg" src="graphics/kappnav-logo.svg" alt="kAppNav logo">
            <div class="logo_text">        
                <p id="kappnav-title">kAppNav</p>
                <p>Kubernetes Application Navigator</p>
            </div>
        </div>
        <p>{{ site.description }}</p>
        <div class="button" id="getting_started"><a href="https://github.com/kappnav/README" target="_blank" rel="noopener">Get Started</a></div>
    </section>
    <section class="graphic">
        <img class="triangles_svg" src="graphics/kappnav-graphic.svg" alt="kAppNav graphic">
    </section>
    <div class="info">
        <p>The Kubernetes Application Navigator is a tool that extends the Kubernetes® console to provide <b>display inspection, understanding, and navigation</b> through the deployed resources that comprise an application.</p>
        <p>The Kubernetes Application Navigator uses the <a href="https://github.com/kubernetes-sigs/application/blob/master/config/crds/app_v1beta1_application.yaml" target="_blank" rel="noopener">Application Custom Resource Definition (CRD)</a> from the <a href="https://github.com/kubernetes-sigs/application" target="_blank" rel="noopener">Kubernetes Application SIG</a> as the basis for describing the applications.</p>
    </div>
    <div class="customizable">
        <h1 class="customizable_title">Customizable</h1>
        <div class="resources">
            <h3>Resources</h3>
            <p class="tri_section_p"> More than just cloud-native, we have created custom resource definitions that will allow you to bring legacy application status and end-points into Kubernetes® with you.</p>
        </div>
        <div class="actions">
            <h3>Actions</h3>
            <p>Right out of the box, we have component specific actions that you can setup, use, and edit to help work with your application including day 2 operations.</p>
        </div>
        <div class="applications">
            <h3>Applications</h3>
            <p>Create applications how you want and how you work. Use labels, expressions, and kinds to help automatically organize your applications and debug them.</p>
        </div>
    </div>
    {%- include footer.html -%}
</div>