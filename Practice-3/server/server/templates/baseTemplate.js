let baseTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src= "https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        <b>Hello {{firstName}},</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        You have taken the first step towards innovation. Rest is the matter of detailing! Thank you for submitting an idea. Our panel will take it forward from here.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        While your idea is being reviewed, sit back and explore your co-worker's ideas.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

let approveTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src="https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        <b>Hello {{firstName}},</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Yayy! Your idea has been approved and is open for nomination. <br>Like Simon Sinek said - What good is an idea if it remains an idea? Try. Experiment. Fail. Try again. Change the world.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Let the magic begin!
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

let rejectTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src="https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        <b>Hello {{firstName}},</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        We will not be able to move forward with your idea at the moment. <br>
                                                        As Edwin Land said, an essential aspect of creativity is not being afraid to fail.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Looking forward to hearing from you again!
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

let completeTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src="https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Innovation is the unrelenting drive to break the status quo and develop anew where few have dared to go. Thank you for breaking the barriers and putting on your thinking hats and bring it fruition.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Looking forward to hearing from you again!
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

let UnassignRoleTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src="https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        <b>Dear {{userName}},</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Thank you for your nomination. We really appreciate your interest, however due to a change in requirement, we are modifying your current nomination on the {{idea_name}}
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Please feel free to explore your co-worker's ideas.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

let UnassignRoleSelfTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src="https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        <b>Dear {{userName}},</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        We are sorry to see you go, please feel free to explore your co-worker's ideas!
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

let deleteUserRoleTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src="https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        <b>Dear {{userName}},</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Thank you for your nomination. We really appreciate your interest, however due to a change in requirement, we are closing the role at the moment.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Please feel free to explore your co-worker's ideas.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

let deleteRoleTemplate = {
  subject: `{{subject}}`,
  bodyHtml: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!---->
      <!---->
      <!--SM NEW START -->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <meta name="robots" content="no index">
      <!--[if !mso]><!-->
      <link rel="stylesheet" href="https://use.typekit.net/bjj0kop.css">
      <link rel="stylesheet" href="https://use.typekit.net/aen5nae.css">
      <!--<![endif]-->
      <title>Though Foundry</title>
      <!--SM NEW END -->
      <!---->
      <!--[if gt mso 15]>
      <style type="text/css" media="all">
        /* Outlook 2016 Height Fix (Note: Doesn't seem to work - AG) */
        table, tr, td {border-collapse: collapse;}
        tr { font-size: 0px; line-height: 0px; border-collapse: collapse; }
      </style>
      <![endif]-->
      <!--[if gte mso 16]>
      <style>
        .keep-white {
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:"0 \#101010 0 100000\,100000 \#101010 0 100000";
        color:#000000 !important;
        }
      </style>
      <![endif]-->
      <style type="text/css">
        /* Client-specific Styles */
        * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }
        #outlook a {
        padding: 0;
        }
        html,
        body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0 auto !important;
        padding: 0 !important;
        min-width: 100%;
        }
        .ExternalClass {
        width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%;
        }
        .backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
        }
        .backgroundImageTable {
        margin: 0;
        padding: 0;
        }
        img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        }
        a img {
        border: none;
        }
        a[href^="tel"] {
        color: inherit;
        text-decoration: none;
        }
        .sup {
        -webkit-text-size-adjust: none;
        }
        html {
        -webkit-text-size-adjust: none;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        }
        .x-gmail-data-detectors,
        .x-gmail-data-detectors *,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        }
        div,
        a,
        tr,
        td,
        table,
        body,
        span,
        img,
        td,
        sup {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
        mso-line-height-rule: exactly !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        }
        table,
        tr,
        td,
        img {
        border-spacing: 0;
        cell-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
        }
        strong {
        font-weight: bold !important;
        }
        em {
        font-style: italic !important;
        }
        p {
        margin: 0;
        padding: 0;
        margin-bottom: 0;
        }
        .greylinktext,
        .greylinktext a,
        .greylinktext a:link,
        .greylinktext a:active,
        .greylinktext a:hover,
        .greylinktext a:visited {
        color: #333333 !important;
        text-decoration: none !important;
        }
        .link,
        .link a,
        .link a:link,
        .link a:active,
        .link a:hover,
        .link a:visited {
        color: inherit !important;
        text-decoration: none !important;
        }
        .linkunder,
        .linkunder a,
        .linkunder a:link,
        .linkunder a:active,
        .linkunder a:hover,
        .linkunder a:visited {
        color: inherit !important;
        text-decoration: underline !important;
        }
        .whitelinkunder,
        .whitelinkunder a,
        .whitelinkunder a:link,
        .whitelinkunder a:active,
        .whitelinkunder a:hover,
        .whitelinkunder a:visited {
        color: #fffffe !important;
        text-decoration: underline !important;
        }
        .preheader {
        display: none !important;
        visibility: hidden;
        opacity: 0;
        color: transparent;
        height: 0;
        width: 0;
        }
        @media only screen and (max-width: 480px) {
        /* Targets Gmail */
        u~div .full-wrap {
        min-width: 100vw;
        }
        /* Targets Gmail on Android */
        div>u~div .full-wrap {
        min-width: 100%;
        }
        }
      </style>
      <style media="all">
        @media (prefers-color-scheme: dark) {
        /* Your dark mode styles: */
        .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        [data-ogsc] .darkmodecolor {
        background: #ffffff;
        background-image: linear-gradient(#ffffff, #ffffff);
        }
        .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        [data-ogsc] .darkmodecolor1 {
        background: #101010;
        background-image: linear-gradient(#101010, #101010);
        color: #fffffe !important;
        -webkit-text-fill-color: #fffffe;
        }
        }
      </style>
      <!--[if mso | ie]>
      <style>
        body,
        table,
        td,
        span,
        a,
        strong,
        tr,
        font,
        sup {
        font-family: Arial, Helvetica, sans-serif !important;
        }
        .sup {
        vertical-align: 1px !important;
        font-size: 100% !important;
        }
      </style>
      <![endif]-->
      <!--[if ie]>
      <style>
        .sup {
        vertical-align: 6px !important;
        font-size: 80% !important;
        }
      </style>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
        border-collapse: collapse;
        border-spacing: 0;
        mso-line-height-rule: exactly;
        mso-margin-bottom-alt: 0;
        mso-margin-top-alt: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        }
      </style>
      <![endif]-->
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    </head>
    <body style="-webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -ms-text-size-adjust: none; margin: auto; background-color: #ffffff; background-image: linear-gradient(#ffffff,#ffffff); padding:0;">
      <!-- START OF MAIN BODY WRAPPER -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff,#ffffff);">
        <tr>
          <td valign="top" align="center" bgcolor="#ffffff">
            <!-- START OF GMAIL WRAPPER -->
            <table width="600" style="max-width:600px; width: 600px; min-width: 600px;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main" role="presentation">
              <tr>
                <td align="center" valign="top" bgcolor="#ffffff" role="presentation">
                  <!-- START OF CENTERED LAYOUT -->
                  <table class="em_Z01 em_fill" cellpadding="0" cellspacing="0" border="0" width="600" style="width:600px;" role="presentation">
                    <tr>
                      <td valign="top" align="center">
                        <!-- HEADER -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="full-wrap" role="presentation" style="background-image: linear-gradient(#ffffff, #ffffff)">
                          <tr>
                            <td width="100%" valign="top" align="center" bgcolor="#ffffff" style="background-image: linear-gradient(#ffffff, #ffffff)">
                              <table width="100%" style="background-image: linear-gradient(#ffffff, #ffffff)" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" align="center" class="tbl_main darkmodecolor" role="presentation">
                                <tr>
                                  <td align="center" valign="top" bgcolor="#ebe6e6" role="presentation" style=" background-color: #ffffff; background-image: linear-gradient(#ffffff, #ffffff)">
                                    <!-- START Header -->
                                    <table class="" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ebe6e6" style="background-color: #ebe6e6;">
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding: 20px 0px 20px 0px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                              <td align="center" valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <tr>
                                                    <td align="center" valign="top" style="padding: 0px 0px 0px 0px">
                                                      <a href="#" target="_blank">
                                                      <img src="https://thoughtsfoundry.epsilon.com/static/media/epsilon.1dce940e70cbe71f8a5278a7189e33de.svg" width="170" height="auto" alt="Epsilon" border="0" style="width: 170px; display: block; margin: 0; padding: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #ffffff" /></a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- End Header  -->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!-- END OF MAIN BODY WRAPPER -->
                        <!-- START MAIN CONTENT -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                          <tr>
                            <td align="center" valign="top">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                <tr>
                                  <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                    <!-- Start TAN ROUNDED CORNER BOX  (Hero)-->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;" class="">
                                      <tr>
                                        <td align="center" valign="top" bgcolor="#ecf8ff" style="padding: 0 0 10px 0; font-size: 0px; border:0; background-color: #ecf8ff;">
                                          <a href="#" target="_blank" style="text-decoration: none; outline: none; color: #101010; font-family: Arial, Helvetica, sans-serif" class="link">
                                            <img src="https://thoughtsfoundry.epsilon.com/static/media/thoughtFoundryHeroBanner.c6d0069947ffa3e6100f.png" width="600" height="auto" alt="Thoughts Foundry - Where ideas take shape..." style="padding:0;display: block; margin: 0 auto;line-height:12px;font-size:12px;font-family: Arial, Helvetica, sans-serif;" border="0">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="vertical-align: top; padding:0px 0px 10px 0px">
                                          <table width="550" border="0" cellspacing="0" cellpadding="0" role="presentation" bgcolor="#ecf8ff" style="background-color: #ecf8ff;">
                                            <tr>
                                              <td class="" valign="top" align="center" style="font-size: 16px">
                                                <!-- START MAIN CONTENT -->
                                                <!-- START Hero Module -->
                                                <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                  <!-- START Hero Module Body Copy -->
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        <b>Team,</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        {{roleName}} for the {{ideaName}} has been deleted by {{userName}}.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td valign="top" align="center" style="vertical-align: middle; color: #101010; font-size: 18px; padding:10px 30px 10px 30px; font-family: Arial, Helvetica, sans-serif; line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-align: left" outline="0" border="0">
                                                      <p style="color: #101010;font-family: Arial, Helvetica, sans-serif; font-size: 18px;line-height: 26px; mso-line-height-rule: exactly; font-weight: normal; text-decoration: none;"> 
                                                        Regards, <br>
                                                      <b>Team Thought Foundry</b>
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- END Hero Module Body Copy -->
                                                </table>
                                                <!-- END Hero Module -->
                                                <!-- END MAIN CONTENT -->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                    <!-- END TAN ROUNDED CORNER BOX (Hero)-->
                                  </td>
                                </tr>
                              </table>
                              <!--  START FOOTER Module -->
                              <table role="presentation" style="background-color:#ebe6e6;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ebe6e6">
                                <tr>
                                  <td style="vertical-align: top; padding: 10px 10px 10px 10px" valign="top" align="center">
                                    <table style="width: 550px" role="presentation" width="550" cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                        <td style="padding: 10px 0px 4px 0px; font-size: 10px; font-family: sans-serif; mso-height-rule: exactly; line-height: normal; text-align: left; color: #101010" valign="top" align="left">
                                          <p style="padding: 0; margin: 0; color: #101010; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: normal; font-weight: normal; mso-line-height-rule: exactly; text-align: center" class="link">
                                            <span style="color: #101010">Copyright &#169; Epsilon 2024. All rights reserved. <br>
                                            Write to us @ <a href="mailto:thoughts.foundry@epsilon.com" target="_blank" style="color: #101010; text-decoration: none"><span style="color: #101010; text-decoration: none">thoughts.foundry@epsilon.com</span></a></span>
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                              <!--  END FOOTER Module  -->
                            </td>
                          </tr>
                        </table>
                        <!-- END MAIN CONTENT -->
                        <!-- END OF CENTERED LAYOUT -->
                      </td>
                    </tr>
                  </table>
                  <!-- END OF GMAIL WRAPPER -->
                </td>
              </tr>
            </table>
            <!-- END OF MAIN BODY WRAPPER -->
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

module.exports = {
  baseTemplate,
  approveTemplate,
  rejectTemplate,
  completeTemplate,
  UnassignRoleTemplate,
  deleteRoleTemplate,
  deleteUserRoleTemplate,
  UnassignRoleSelfTemplate
}