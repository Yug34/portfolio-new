import type {NextPage} from 'next'
import { Hover } from '../components/Common/Hover';
import { Flex } from '../components/Common/Flex';

const Contact: NextPage = () => {
    return (
        <Flex flexDirection='column' justify='center' align='center' rowGap='6px'>
            <div>Will integrade a contact form soon, almost done with grad school applications!</div>
            <div>
                Email:
                <Hover
                    style={{marginLeft: '4px'}}
                    monoState
                    externalHref={true}
                    fontWeight={600}
                    href={"mailto:yug.gjr@gmail.com"}
                >
                    yug.gjr@gmail.com
                </Hover>
            </div>

            <Flex colGap='6px' justify='center' align='center'>
                <Hover
                    monoState
                    externalHref={true}
                    fontWeight={600}
                    href={"https://www.linkedin.com/in/yug34/"}
                >
                    LinkedIn
                </Hover>

                |

                <Hover
                    monoState
                    externalHref={true}
                    fontWeight={600}
                    href={"https://github.com/Yug34"}
                >
                    GitHub
                </Hover>
            </Flex>
        </Flex>
    );
};

export default Contact;
