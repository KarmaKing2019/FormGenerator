import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Button, Tabs, Tab, Jumbotron } from 'react-bootstrap'
import './App.css'

function NavControls (props) {
  console.log('====< ' + props.targetId)
  return (
    <div className='col-12'>
      <i
        id={'dt-' + props.targetId}
        onClick={props.deleteComponent}
        class='bi bi-x-circle glyphicon-globe'
      ></i>
      <i
        id={'up-' + props.targetId}
        onClick={props.moveUp}
        class='bi bi-arrow-up-circle glyphicon-globe'
      ></i>
      <i
        id={'dn-' + props.targetId}
        onClick={props.moveDown}
        class='bi bi-arrow-down-circle glyphicon-globe'
      ></i>
      <i class='bi bi-pencil-square glyphicon-globe'></i>
    </div>
  )
}

class FormGenerator extends Component {
  state = {
    indexControl: 5,
    navControlId: '',
    formGroupBorder: '',
    selectedFormGroup: '',
    defaultTabKey: 'home',
    components: [
      {
        type: 'button',
        value: 'button 1'
      },
      {
        type: 'button',
        value: 'button 2'
      },
      {
        type: 'button',
        value: 'button 3'
      }
    ],
    formGroups: [],
    test: [
      {
        component: 'input',
        type: 'password',
        id: 'pass',
        placeholder: 'Y0'
      },
      {
        component: 'input',
        type: 'email',
        id: 'email',
        placeholder: '2'
      }
    ]
  }

  // ********** ADD CONTROLS TO STATE ************************************************************
  // *********************************************************************************************

  // === ADD INPUT
  addInput = event => {
    console.log('New ID:' + this.state.test.length)
    console.log('Add input Clicked')

    // ADD CONTROL TO SELECTED FORMGROUP

    const fg = this.state.FormGroups
    const selectedfg = this.state.selectedFormGroup

    const newFormGroupArray = fg.map(item => {
      if (item.id === selectedfg) {
        console.log('+++++++ THERE WAS A MATCH')

        const input = {
          component: 'input',
          type: 'text',
          id: this.state.test.length + 1,
          placeholder: 'Your Text', //
          formGroup: selectedfg
        }

        item.controls = [...item.controls, input]
        console.log(item.controls)
      }
    })

    const input = {
      component: 'input',
      type: 'password',
      id: this.state.test.length + 1,
      placeholder: this.state.test.length + 1 //
    }
    this.setState({ test: [...this.state.test, input] })
  }

  // === ADD BUTTON -----------------------------------------------------

  addButton = event => {
    console.log('New ID:' + this.state.test.length)
    console.log('Add input Clicked')

    // ADD CONTROL TO SELECTED FORMGROUP

    const fg = this.state.FormGroups
    const selectedfg = this.state.selectedFormGroup

    const newFormGroupArray = fg.map(item => {
      if (item.id === selectedfg) {
        console.log('+++++++ THERE WAS A MATCH')

        const button = {
          component: 'button',
          id: 'btn-' + this.state.test.length + 1
        }

        item.controls = [...item.controls, button]
        console.log(item.controls)
      }
    })

    const input = {
      component: 'input',
      type: 'password',
      id: this.state.test.length + 1,
      placeholder: this.state.test.length + 1 //
    }
    this.setState({ test: [...this.state.test, input] })
  }

  // === ADD TEXTAREA -----------------------------------------------------

  addTextArea = event => {
    console.log('New ID:' + this.state.test.length)
    console.log('Add input Clicked')

    // ADD CONTROL TO SELECTED FORMGROUP

    const fg = this.state.FormGroups
    const selectedfg = this.state.selectedFormGroup

    const newFormGroupArray = fg.map(item => {
      if (item.id === selectedfg) {
        console.log('+++++++ THERE WAS A MATCH')

        const textArea = {
          component: 'textArea',
          id: 'textArea-' + this.state.test.length + 1
        }

        item.controls = [...item.controls, textArea]
        console.log(item.controls)
      }
    })

    const input = {
      component: 'input',
      type: 'password',
      id: this.state.test.length + 1,
      placeholder: this.state.test.length + 1 //
    }
    this.setState({ test: [...this.state.test, input] })
  }

  // === ADD FILE -----------------------------------------------------

  addFile = event => {
    console.log('New ID:' + this.state.test.length)
    console.log('Add input Clicked')

    this.setState({ defaultTabKey: 'properties' })
    console.log(this.state.defaultTabKey)
    // ADD CONTROL TO SELECTED FORMGROUP

    const fg = this.state.FormGroups
    const selectedfg = this.state.selectedFormGroup

    const newFormGroupArray = fg.map(item => {
      if (item.id === selectedfg) {
        console.log('+++++++ THERE WAS A MATCH')

        const newFile = {
          component: 'file',
          id: 'file-' + this.state.test.length + 1
        }

        item.controls = [...item.controls, newFile]
        console.log(item.controls)
      }
    })

    const input = {
      component: 'input',
      type: 'password',
      id: this.state.test.length + 1,
      placeholder: this.state.test.length + 1 //
    }
    this.setState({ test: [...this.state.test, input] })
  }

  // ********** FORM ACTIONS *********************************************************************
  // *********************************************************************************************

  moveUp = e => {
    console.log('Test: ' + JSON.stringify(this.state.test[0]))
    let grabId = e.target.id.toString().slice(3)
    console.log('GrabId : ' + grabId)

    const targetHold = this.state.test[grabId - 2] // item to replace hold

    let data = this.state.test
    if (grabId - 2 < 0) {
      alert("Can't go any further")
    } else {
      data[grabId - 2] = this.state.test[grabId - 1] // place ahead
      data[grabId - 1] = targetHold // place behind

      this.setState({
        test: data
      })
    }
    this.setState({ navControlId: this.state.navControlId - 1 })
    console.log('mmmmmmmmmmmmmmmmmmm ' + JSON.stringify(this.state.test))
  }

  moveDown = e => {
    console.log('Test:' + JSON.stringify(this.state.test[0]))
    let grabId = e.target.id.toString().slice(3)
    console.log('GrabId : ' + grabId)
    const targetHold = this.state.test[grabId - 1] // item to replace hold

    console.log(targetHold)

    let data = this.state.test
    if (grabId > data.length - 1) {
      alert("Can't go any further")
    } else {
      console.log('STATE: ' + JSON.stringify(this.state.test[grabId]))
      console.log('TARGET HOLD: ' + JSON.stringify(targetHold))

      data[grabId - 1] = this.state.test[grabId] // place behind

      data[grabId] = targetHold // place bottom

      console.log('>>> ' + JSON.stringify(data))

      this.setState({
        test: data
      })
      this.setState({ navControlId: this.state.navControlId + 1 })
    }
  }

  deleteComponent = e => {
    // add filter to remove component
    let grabId = e.target.id.toString().slice(3)
    console.log('ID SELECTED: ' + grabId)
    const targetDelete = this.state.test[grabId - 1]

    let data = this.state.test

    const newArray = data.filter(item => {
      //console.log('GRABID:' + grabId)
      //console.log('ITEM:' + item.id)

      if (item.id.toString() !== grabId.toString()) {
        // console.log('MATCH!!!')

        return item
      }
      //console.log(item.id)
    })
    this.setState({ indexCounter: this.state.indexControl - 1 })
    console.log(newArray)
    this.setState({
      test: newArray
    })
  }

  // ********** FORM GROUPS **********************************************************************
  // *********************************************************************************************

  addFormGroup = e => {
    // Here you are just adding to the state, render will construct a new FGroup
    // on initialization

    //alert('Add that FormGroup Dun Son')
    console.log('Add a NewForm Group')

    const newFG = {
      id: 'NewFG ' + Date.now().toString(),
      focusBorder: false,
      controls: []
    }
    console.log(newFG.nameFG)
    //<Form className='justify-content-between border mt-5'></Form>

    this.setState({ formGroups: [...this.state.formGroups, newFG] })
  }

  // *********************************************************************************************
  // ********** END FORM GROUPS ******************************************************************

  newNavControl = e => {
    //alert(e.target.id)
    const id = e.target.id
    console.log('id: ' + id)
    this.setState({ navControlId: id })
    console.log('navControlId: ' + this.state.navControlId)
  }

  // *********************************************************************************************
  // ********** SET FOCUS FORM ******************************************************************

  setFGroupFocus = e => {
    const id = e.target.id
    console.log(id)
    console.log('Set focus!!!')
    // create copy of state

    // set the state selected FormGroup id
    this.setState({ selectedFormGroup: e.target.id })
    //alert("Selected FormGroupId : " + this.state.selectedFormGroup)

    let FGroup = this.state.formGroups

    const newFG = FGroup.map(item => {
      if (item.id === e.target.id) {
        console.log('Found a Match Master')
        item.focusBorder = true
        return item
      }
      item.focusBorder = false
      return item
    })

    this.setState({ FormGroups: newFG })

    //console.log('Result of FGroup Map: ' + JSON.stringify(newFG))
  }


setTab = e => {
    //alert('Home')
    this.setState({defaultTabKey: 'home'})
    //alert(e)

    if(e === 'home') {
      this.setState({ defaultTabKey: 'home' })

    } else if(e === 'properties') {
      this.setState({ defaultTabKey: 'properties' })
    }
    console.log('>>>>>>>>>>>>>>>>>Setting tab' + e)
}

editInput = e => {
  alert(e.target.id)
  console.log('Create Edit Form')
  this.setState({defaultTabKey: 'properties'})
}


  // *********************************************************************************************
  // ********** ADD CONTROS TO GROUP FORM ******************************************************************

  addFormGroupControls = fgControls => {
    console.log('////////////// FGCONTROLS: ' + JSON.stringify(fgControls))

    const genControls = fgControls.map(item => {
      //alert(item.component)
      switch (item.component) {
        case 'input':
          return (
            <div className='p-2'>
              <Input
                type={item.type}
                id={item.id}
                placeholder={item.placeholder}
                onFocus={this.editInput}
              />
            </div>
          )
          break

        case 'button':
          return (
            <div className=' border d-flex align-items-start p-2'>
              <Button>Button</Button>
            </div>
          )
          break

        case 'textArea':
          return (
            <div className=' border d-flex '>
              <Input type='textarea' />
            </div>
          )
          break

        case 'file':
          //alert('adding file')
          return (
            <div className=' border d-flex m-2'>
              <Input type='file' />
            </div>
          )
          break
      }
    })

    return genControls
  }

  generateTabs = () => {
    console.log('gone girl =>-' + this.state.defaultTabKey+ "-")
    return (
      <div>
        
        <Tabs
          activeKey={this.state.defaultTabKey}
          id='uncontrolled-tab-example'
          onSelect={this.setTab}
        >
          <Tab eventKey='home'  title='Controls'>
            {/* // <Sonnet /> */}
            <div className='border border-4 shadow mt-3 mb-4'>
              <Button className='m-2' onClick={this.addFormGroup}>
                Add FormGroup
              </Button>
            </div>
            <div className='border border-4 shadow p-2'>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addInput}
              >
                Textbox
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addInput}
              >
                Label
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addButton}
              >
                Button
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addInput}
              >
                Radio
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addFile}
              >
                File
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addInput}
              >
                Dropdown
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addTextArea}
              >
                TextArea
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addInput}
              >
                Multi Select
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addInput}
              >
                Checkbox
              </Button>
              <Button
                style={{ width: '150px', height: '100px' }}
                variant='warning'
                className=' m-2 shadow'
                onClick={this.addInput}
              ></Button>
            </div>
          </Tab>

          <Tab eventKey='properties' title='Properties' key='properties'>
            {/* <Sonnet /> */}
          </Tab>
          <Tab eventKey='contact' title='Contact' disabled>
            {/* <Sonnet /> */}
          </Tab>
        </Tabs>
      </div>
    )
  }

  render () {
    let indexGenerate = 0
    console.log('navControlId Render: ' + this.state.navControlId)

    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-7 p-4 border shadow mt-5 ml-5'>
              <Jumbotron>
                <h1>Hello World</h1>
              </Jumbotron>

              {/* <i class='bi bi-dash-circle glyphicon-globe'></i> */}

              {/* {this.state.components.map(component => {
                return <Button>{component.value}</Button>
              })} */}

              {this.state.formGroups.map(fg => {
                //alert(JSON.stringify(fg))

                if (fg.focusBorder === false) {
                  console.log('The border is false')
                  return (
                    <Form
                      id={fg.id}
                      onClick={this.setFGroupFocus}
                      className='justify-content-between border mt-2 mb-3 p-3'
                      //style={{ height: '150px' }}
                    >
                      {this.addFormGroupControls(fg.controls)}
                    </Form>
                  )
                } else {
                  console.log('The border is true')
                  return (
                    <Form
                      onClick={() => {
                        //alert('you clicked me how dare thee!!! ')
                      }}
                      className='justify-content-between border border-primary border-3 mt-2 p-3'
                      //style={{ height: '150px' }}
                    >
                      {this.addFormGroupControls(fg.controls)}
                    </Form>
                  )
                }
              })}

              <Form className='justify-content-between border'>
                <FormGroup className='justify-content-between border mt-5'>
                  FormGroup
                </FormGroup>
              </Form>
              <Form className='justify-content-between border'>
                <FormGroup className='text-left m-2 border'>
                  <Label for='exampleEmail' className='d-flex'>
                    Email
                  </Label>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='with a placeholder'
                  />
                </FormGroup>
                <FormGroup className='text-left m-2'>
                  <Label for='examplePassword' className='d-flex'>
                    Password
                  </Label>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='password placeholder'
                  />
                </FormGroup>
                <FormGroup className='text-left m-2'>
                  <Label for='exampleSelect' className='d-flex'>
                    Select
                  </Label>
                  <Input type='select' name='select' id='exampleSelect'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup className='text-left m-2'>
                  <Label for='exampleSelectMulti' className='d-flex'>
                    Select Multiple
                  </Label>
                  <Input
                    type='select'
                    name='selectMulti'
                    id='exampleSelectMulti'
                    multiple
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup className='text-left m-2'>
                  <Label for='exampleText' className='d-flex'>
                    Text Area
                  </Label>
                  <Input type='textarea' name='text' id='exampleText' />
                </FormGroup>
                <FormGroup className='text-left m-2'>
                  <Label for='exampleFile' className='d-flex'>
                    File
                  </Label>
                  <Input type='file' name='file' id='exampleFile' />
                  <FormText color='muted'>
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup>
                <FormGroup tag='fieldset' className='text-left m-2'>
                  <legend>Radio Buttons</legend>
                  <FormGroup check>
                    <Label check>
                      <Input type='radio' name='radio1' /> Option one is this
                      and that—be sure to include why it's great
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type='radio' name='radio1' /> Option two can be
                      something else and selecting it will deselect option one
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input type='radio' name='radio1' disabled /> Option three
                      is disabled
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type='checkbox' /> Check me out
                  </Label>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </div>
            <div className='col-3 shadow mt-5 ml-3 border'>
              <h3 className='mt-4'>Tools</h3>
              <NavControls
                moveUp={this.moveUp}
                moveDown={this.moveDown}
                deleteComponet={this.deleteComponent}
                targetId={this.state.navControlId}
              />
              {console.log('==============> ' + this.state.defaultTabKey)}
              {this.generateTabs()}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default FormGenerator
