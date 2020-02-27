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
        <p class="site_desc">{{ site.description }}</p>
        <a class="button" id="getting_started" href="https://github.com/kappnav/README" target="_blank" rel="noopener">Get Started</a>
    </section>
    <section class="graphic">
        <img class="triangles_svg" src="graphics/kappnav-graphic.svg" alt="kAppNav graphic">
    </section>
    <div class="info">
        <h1 class="info_title">Cloud Native and Beyond</h1>
        <div class="summary">
        Designed to provide <b>quick inspection, issue determination, and error resolution</b>, the Kubernetes Application Navigator (kAppNav) compliments the Kubernetes® console by enabling robust management of the deployed resources that comprise an application.
        </div>
        <div class="b_arrow">
            <img src="graphics/Triangle_blue_right_small.svg" alt="Small blue arrow pointing to image on right">
        </div>
        <div class="kub_kappnav">
            <img src="graphics/Kube_kAppNav.svg" alt="Logo for kubernetes plus kappnav">
        </div>
        <div class="code_example">
            <img src="graphics/kAppNav_YAML.svg" alt="Example of yaml file content">
        </div>
        <div class="crd_sig">
            <p>kAppNav uses the <a class="description_link" href="https://github.com/kubernetes-sigs/application/blob/master/config/crd/bases/app.k8s.io_applications.yaml" target="_blank" rel="noopener">Application Custom Resource Definition (CRD)</a> from the <a class="description_link" href="https://github.com/kubernetes-sigs/application" target="_blank" rel="noopener">Kubernetes Application SIG</a> as the basis for describing the applications.</p>
        </div>
        <div class="g_arrow">
            <img src="graphics/Triangle_green_left_small.svg" alt="Small green arrow pointing to image on left">
        </div>
        <div class="kabanero_info">
            <p>Packaged with Kabanero, kAppNav is a centralized view of applications, deployed resources, and robust actions for error remediation. Learn more at <a class="description_link" href="https://kabanero.io/" target="_blank" rel="noopener">kabanero.io</a>.</p>
        </div>
        <div class="y_arrow">
            <img src="graphics/Triangle_yellow_right_small.svg" alt="Kabanero logo">
        </div>
        <div class="kabanero_logo">
            <img src="graphics/kabanero-logo.svg" alt="Small yellow arrow pointing to image on right">
        </div>
    </div>
    <div class="after_info_line">
        <img src="graphics/Triangle_orange_left_blur.svg" alt="Arrow in section separator">
    </div>
    <div class="customizable">
        <h1 class="customizable_title">Customizable</h1>
        <div class="resources">
            <h3>Resources</h3>
            <p class="tri_section_p"><a class="description_link" href="https://github.com/kappnav/samples/tree/master/legacyapp" target="_blank" rel="noopener">Custom resource definitions</a> ensure that legacy application status and end-points are visible in Kubernetes, alongside traditional cloud-native applications.</p>
        </div>
        <div class="actions">
            <h3>Actions</h3>
            <p>Day 2 operations and long term application management are enabled through pre-configured and customizable component specific actions.</p>
        </div>
        <div class="applications">
            <h3>Applications</h3>
            <p>Use labels, expressions and kinds to configure applications, automatically organizing them to make operational tasks easier.</p>
        </div>
    </div>
        <div class="after_custom_line">
        <img src="graphics/Triangle_blue_right_blur.svg" alt="Arrow in section separator">
    </div>
    <div class="built_on">
        <h1 class="builton_title">Built on open source</h1>
        <div class="go">
            <a href="https://golang.org/" target="_blank"><img src="graphics/Go-Logo_LightBlue.svg" alt="Go"></a>
        </div>
        <div class="kubernetes">
            <a href="https://kubernetes.io/" target="_blank"><img src="graphics/kubernetes-logo.png" alt="Kubernetes"></a>
        </div>
        <div class="open_liberty">
            <a href="https://openliberty.io" target="_blank"><img src="graphics/open-liberty.png" alt="Open Liberty"></a>
        </div>
        <div class="node">
            <a href="https://nodejs.org" target="_blank"><img src="graphics/nodejs.png" alt="Node.js"></a>
        </div>
    </div>
    {%- include footer.html -%}
</div>