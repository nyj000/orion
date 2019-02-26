export default {
  /**
   * 人脸特征识别
   * */
  // 人脸、活体检测
  getFaceDetection: { method: 'POST', path: 'faces/detection', options: { timeout: 60000 } },
  // 人脸比对
  faceVerification: { method: 'POST', path: 'faces/verification', options: { timeout: 60000 } },
  // 人脸识别
  faceIdentification: { method: 'POST', path: 'faces/identification', options: { timeout: 60000 } },
  // 人脸图片识别
  faceImageIdentification: { method: 'POST', path: 'faces/image_identification', options: { timeout: 60000 } },
  // 识别日志(抓拍日志)
  faceIdentifyLogs: { method: 'GET', path: 'online_identify_logs', },

  /**
   * 根据face_uuid获取详情
   * */
  getFaceInfo: { method: 'GET', path: 'faces/:face_uuid' },
}
