import { VoteComponent } from './vote.component';
describe('VoteComponent', () => {
  let component: VoteComponent;

  // Set up
  beforeEach(() => {
    component = new VoteComponent();
  });

  // tear down
  afterEach(()=>{
  });
  it('should increment totalVotes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downVoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
