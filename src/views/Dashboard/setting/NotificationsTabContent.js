import { useState } from 'react'
import { Row, Col, CustomInput, Button } from 'reactstrap'

const NotificationsTabContent = () => {
  const [followMe, setFollowMe] = useState()
  const [blogDigest, setBlogDigest] = useState()
  const [answerOnForm, setAnswerOnForm] = useState()
  const [productUpdates, setProductUpdates] = useState()
  const [newAnnouncements, setNewAnnouncements] = useState()
  const [commentOnArticle, setCommentOnArticle] = useState()

  return (
    <Row>
      <h6 className='section-label mx-1 mb-2'>Activity</h6>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='commentOnArticle'
          checked={commentOnArticle}
          onChange={e => setCommentOnArticle(e.target.checked)}
          name='customSwitch'
          label='Email me when someone comments on my article'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='answerOnForm'
          checked={answerOnForm}
          onChange={e => setAnswerOnForm(e.target.checked)}
          name='customSwitch'
          label='Email me when someone answers on my form'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='followMe'
          checked={followMe}
          onChange={e => setFollowMe(e.target.checked)}
          name='customSwitch'
          label='Email me when someone follows me'
        />
      </Col>

      <Col className='mt-1' sm='12'>
        <Button.Ripple className='mr-1' color='primary'>
          Save changes
        </Button.Ripple>
        <Button.Ripple color='secondary' outline>
          Cancel
        </Button.Ripple>
      </Col>
    </Row>
  )
}

export default NotificationsTabContent
