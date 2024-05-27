const template = document.createElement('template')

template.innerHTML = `
    <style>
        .RecentPosts {
           padding: 32px;
           border-radius: 8px;
           width: 480px;
           box-sizing: border-box;
           height: 546px;
           background-color: #FFFFFF;
        }
        
        .RecentPosts-title {
            font-family: "Inter";
            font-size: 20px;
            font-weight: 500;
            line-height: 26px;
            padding-bottom: 16px;
            color: var(--color-black);
        }
        
        .RecentPosts__container {
            display: flex;
            flex-direction: column;
            
            > :first-child {
                padding-bottom: 16px;   
            }
            
            > :not(:first-child) {
                border-top: 1px solid var(--color-border);
                padding: 16px 0;
            }
            
            > :last-child {
               padding-bottom: 0;
            }
        }
        
        .RecentPosts-post {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            width: 100%;
        }
        
        .RecentPosts-post img {
            width: 56px;
            height: 56px;
        }
        
        .RecentPosts-post-title {
            font-family: "Inter";
            font-size: 16px;
            font-weight: 500;
            line-height: 22.4px;
            text-align: left;
            color: var(--color-black);
            margin-bottom: 6px;
        }
        
        .RecentPosts-post-date {
            font-family: "Inter";
            font-size: 14px;
            font-weight: 400;
            line-height: 18.2px;
            text-align: left;
            color: var(--color-gray);
        }
    </style>

    <div class="RecentPosts">
        <div class="RecentPosts-title">Recent post</div>
        
        <div class="RecentPosts__container">
            <div class="RecentPosts-post">
                <img 
                    src="/assets/img/post-1.png" 
                    alt="post-1"
                >
              
                <div class="RecentPosts-post-content">
                    <div class="RecentPosts-post-title">
                        Climate change is hitting the heart of Cajun country — through its crawfish
                    </div>
                    
                    <div class="RecentPosts-post-date">08 Jan 2024</div>
                </div>
            </div>
            
            <div class="RecentPosts-post">
                <div class="RecentPosts-post-content">
                    <div class="RecentPosts-post-title">
                        How global warming is disrupting life on Earth
                    </div>
                    
                    <div class="RecentPosts-post-date">08 Jan 2024</div>
                </div>
            </div> 
            
            <div class="RecentPosts-post">
                <img 
                    src="/assets/img/post-2.png" 
                    alt="post-1"
                >
              
                 <div class="RecentPosts-post-content">
                    <div class="RecentPosts-post-title">
                        The Impact of Music on Human Development and Well-Being
                    </div>
                    
                    <div class="RecentPosts-post-date">06 Jan 2024</div>
                </div>
            </div> 
            
            <div class="RecentPosts-post">
                <img 
                    src="/assets/img/post-1.png" 
                    alt="post-1"
                >
              
                <div class="RecentPosts-post-content">
                    <div class="RecentPosts-post-title">
                        Climate change is hitting the heart of Cajun country — through its crawfish
                    </div>
                    
                    <div class="RecentPosts-post-date">08 Jan 2024</div>
                </div>
            </div>
            
            <div class="RecentPosts-post">
                <div class="RecentPosts-post-content">
                    <div class="RecentPosts-post-title">
                        How global warming is disrupting life on Earth
                    </div>
                    
                    <div class="RecentPosts-post-date">08 Jan 2024</div>
                </div>
            </div> 
        </div>
    </div>
`

class RecentPosts extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.append(template.content.cloneNode(true))
    }
}

customElements.define('el-recent-posts', RecentPosts)
