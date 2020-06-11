import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

jest.doMock('../modules/useCalcProcessor', () => {
  return () => ({
    onKey: jest.fn(),
    numDisplayVal: 88
  })
})

describe('App', () => {
  beforeEach(() => jest.resetModules())
  it('Render app without crashing', () => {
    shallow(<App />)
  })

  it('Test display initial 0', async () => {

    const wrapper = mount(<App />)
    const x = wrapper.find('numDisplay').text()
    expect(x).toBe("0")
  })

  it('Test display 9', async () => {

    const wrapper = mount(<App />)
    wrapper.find('button[children="9"]').simulate("click")

    const x = wrapper.find('numDisplay').text()
    expect(x).toBe("9")
  })

  it('Test display clear', async () => {

    const wrapper = mount(<App />)
    wrapper.find('button[children="9"]').simulate("click")
    wrapper.find('button[children="C"]').simulate("click")

    const x = wrapper.find('numDisplay').text()
    expect(x).toBe("0")
  })

  it('Test display negative', async () => {

    const wrapper = mount(<App />)
    wrapper.find('button[children="8"]').simulate("click")
    wrapper.find('button[children="-/+"]').simulate("click")

    const x = wrapper.find('numDisplay').text()
    expect(x).toBe("-8")
  })


  it('Test display equals', async () => {

    const wrapper = mount(<App />)
    wrapper.find('button[children="8"]').simulate("click")
    wrapper.find('button[children="+"]').simulate("click")
    wrapper.find('button[children="8"]').simulate("click")
    wrapper.find('button[children="8"]').simulate("click")

    const x = wrapper.find('numDisplay').text()
    expect(x).toBe("88")
  })

})