<div id="modal-preview-video" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="video-title"><?php print $title?></h2>
              <h3 class="text-uppercase video-description"><?php print $description?></h3>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div id="my-player-vimeo"></div>
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <div class="social-links">
                <a class="fb-link" href="<?php print $link?>" data-share="/destapa-el-camerino/<?php print $nid ?>/share" data-nid="<?php print $nid ?>" id="social-link-<?php print $nid ?>" ></a>
                <a class="tw-link" href="<?php print $link?>" data-share="/destapa-el-camerino/<?php print $nid ?>/share" data-nid="<?php print $nid ?>"></a>
              </div>
            </div>

            <div class="col-8">
              <div class="comparte-gana">
                <h3>Comparte este capítulo y</h3>
                <h4>¡Gánate 1 punto!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
