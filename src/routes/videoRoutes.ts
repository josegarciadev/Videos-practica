import {Router} from 'express'
import * as videoController from '../controller/videoController'

const router=Router();

router.get('/',videoController.getVideos);
router.get('/video/:id',videoController.getVideo);
router.post('/',videoController.createVideo);
router.put('/video/:id',videoController.updateVideo);
router.delete('/video/:id',videoController.deleteVideo);

export default router;